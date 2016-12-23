import Ember from 'ember';

export default Ember.Component.extend({

  isQuestionResponded: Ember.computed('userQuestion.answer', 'userQuestion.state', function() {
    if (this.get('userQuestion.state') === 'NONE') {
      this.get('userQuestion').set('state', 'STARTED');
      this.get('userQuestion').save();
    }
    return !!this.get('userQuestion.answer.id');
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
