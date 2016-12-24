import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    transitionToQuestion: function(question) {
      this.transitionToRoute('game.question', question);
    }
  }
});
