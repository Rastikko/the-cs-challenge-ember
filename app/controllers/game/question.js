import Ember from 'ember';

export default Ember.Controller.extend({
  gameController: Ember.inject.controller('game'),

  actions: {
    answerQuestion: function(question) {
      this.set('model.answer', question);
      this.get('model').save();
    },

    startNextQuestion: function() {
      if (!this.get('gameController').get('model.currentUserQuestion.id')) {
        this.send('transitionToScore')
      } else {
        this.get('gameController').send('transitionToQuestion', this.get('gameController').get('model.currentUserQuestion'));
      }
    },

    transitionToScore: function() {
      this.transitionToRoute('game.score');
    }
  }
});
