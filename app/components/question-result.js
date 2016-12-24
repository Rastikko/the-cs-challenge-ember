import Ember from 'ember';

export default Ember.Component.extend({

  classNames: ['text-center'],

  onDidInsertElement: Ember.on('didInsertElement', function() {
    this.set('startTime', new Date());
    this._countDown();
  }),

  onWillDestroyElement: Ember.on('willDestroyElementpublic', function() {
    if (this.get('countDownTimer')) {
      Ember.run.cancel(this.get('countDownTimer'));
    }
  }),

  isScoreAvailable: Ember.computed('userQuestion.state', 'userQuestion.score', function() {
    if (this.get('userQuestion.state') === 'NONE') {
      this.get('userQuestion').set('state', 'STARTED');
      this.get('userQuestion').save();
    }

    let scoreAvailable = this.get('userQuestion.score') !== null

    if (scoreAvailable && this.get('countDownTimer')) {
      Ember.run.cancel(this.get('countDownTimer'));
    }

    return scoreAvailable;
  }),

  countDownTime: Ember.computed('countTime', 'startTime', function() {
    return Math.round(60 - (this.get('countTime') - this.get('startTime')) / 1000);
  }),

  _countDown: function() {
    this.set('countTime', new Date());
    this.set('countDownTimer', Ember.run.later(this, this._countDown, 1000));
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
