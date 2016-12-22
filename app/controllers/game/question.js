import Ember from 'ember';

export default Ember.Controller.extend({
  gameController: Ember.inject.controller('game'),

  // onQuestionStart: Ember.on('init', Ember.observer('model.state', function() {
  //   if (this.get('model.state') === 'NONE') {
  //     this.get('model').set('state', 'STARTED');
  //     this.get('model').save();
  //   }
  // })),

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
