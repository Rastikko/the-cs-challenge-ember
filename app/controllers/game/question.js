import Ember from 'ember';

export default Ember.Controller.extend({
  gameController: Ember.inject.controller('game'),

  actions: {
    answerQuestion: function(question) {
      this.set('model.answer', question);
      this.get('model').save();
    },

    startNextQuestion: function() {
      this.get('gameController').send('transitionToNextAvailableQuestion');
    }
  }
});
