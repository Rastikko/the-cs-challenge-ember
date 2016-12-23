import Ember from 'ember';

export default Ember.Component.extend({

  classNames: ['text-center'],

  isScoreAvailable: Ember.computed('userQuestion.state', 'userQuestion.score', function() {
    if (this.get('userQuestion.state') === 'NONE') {
      this.get('userQuestion').set('state', 'STARTED');
      this.get('userQuestion').save();
    }
    return this.get('userQuestion.score') !== null;
  }),

  actions: {
    startNextQuestion: function() {
      this.sendAction('startNextQuestion');
    },

    transitionToScore: function() {
      this.sendAction('transitionToScore');
    }
  }
});
