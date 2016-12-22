import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    transitionToNextAvailableQuestion: function() {
      console.log('transitionToNextAvailableQuestion: ', this.get('model.availableUserQuestions.firstObject'));
      if (this.get('model.availableUserQuestions.firstObject')) {
        this.transitionToRoute('game.question', this.get('model.availableUserQuestions.firstObject'));
      } else {
        this.transitionToRoute('game.score');
      }
    }
  }
});
