import Ember from 'ember';

export default Ember.Controller.extend({
  gameController: Ember.inject.controller('game'),

  actions: {
    answerQuestion: function(answer) {
      if (answer === 'timeout-answer-id') {
        this.store.findRecord('answer', 'timeout-answer-id').then((timeoutAnswer) => {
          this.set('model.answer', timeoutAnswer);
          this.get('model').save();
        });
      } else {
        this.set('model.answer', answer);
        this.get('model').save();
      }
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
