import Ember from 'ember';

export default Ember.Controller.extend({
  onInitHandleUserQuestions: Ember.on('init', Ember.observer('availableUserQuestions', function() {
    if (this.get('availableUserQuestions.length') && !this.get('gameStarted')) {
      Ember.run.once(this, 'startNextAvailableQuestion');
      this.set('gameStarted', true);
    }
  })),

  availableUserQuestions: Ember.computed.filter('model.userQuestions.@each.state', function(userQuestion) {
    console.log('state: ', userQuestion.get('state'));
    return userQuestion.get('state') !== 'FINISHED';
  }),

  startNextAvailableQuestion: function() {
    this.transitionToRoute('game.question', this.get('availableUserQuestions.firstObject'));
  }
});
