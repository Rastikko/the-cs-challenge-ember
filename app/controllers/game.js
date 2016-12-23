import Ember from 'ember';

export default Ember.Controller.extend({
  availableUserQuestions: Ember.computed('model.userQuestions.[]', 'model.answeredUserQuestions.[]', function() {
    let answeredQuestionsIds = this.get('model.answeredUserQuestions').mapBy('id');
    return this.get('model.userQuestions').filter(function(userQuestion) {
      return !answeredQuestionsIds.includes(userQuestion.id);
    });
  }),

  actions: {
    transitionToNextAvailableQuestion: function() {
      if (this.get('availableUserQuestions.firstObject')) {
        this.transitionToRoute('game.question', this.get('availableUserQuestions.firstObject'));
      } else {
        // fallback in case we run out of questions :S
        this.transitionToRoute('game.score');
      }
    }
  }
});
