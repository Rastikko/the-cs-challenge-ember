import Ember from 'ember';

export default Ember.Component.extend({

  classNames: ['text-center'],

  onDidInsertElement: Ember.on('didInsertElement', function() {
    this.set('startTime', new Date());
    this._countDown();
  }),

  onWillDestroyElement: Ember.on('willDestroyElementpublic', function() {
    if (this.get('countDownTimer')) {
      this._countDownCancel();
    }
  }),

  isScoreAvailable: Ember.computed('userQuestion.state', 'userQuestion.score', function() {
    if (this.get('userQuestion.state') === 'NONE') {
      this.get('userQuestion').set('state', 'STARTED');
      this.get('userQuestion').save();
    }

    let scoreAvailable = this.get('userQuestion.score') !== null;

    if (scoreAvailable && this.get('countDownTimer')) {
      this._countDownCancel();
    }

    return scoreAvailable;
  }),

  countDownTime: Ember.computed('countTime', 'userQuestion.startTime', function() {
    // TODO: user server start time
    let countTime = Math.round(60 - (this.get('countTime') - this.get('startTime')) / 1000);
    if (countTime < 0) {
      this.sendAction('answerQuestion', 'timeout-answer-id');
      this._countDownCancel();
    }
    return Math.max(countTime, 0);
  }),

  _countDown: function() {
    this.set('countTime', new Date());
    this.set('countDownTimer', Ember.run.later(this, this._countDown, 1000));
  },

  _countDownCancel: function() {
    Ember.run.cancel(this.get('countDownTimer'));
    this.set('countDownTimer', null);
  },

  actions: {
    startNextQuestion: function() {
      this.sendAction('startNextQuestion');
    },

    transitionToScore: function() {
      this.sendAction('transitionToScore');
    }
  }
});
