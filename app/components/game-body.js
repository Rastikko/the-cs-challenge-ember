import Ember from 'ember';

export default Ember.Component.extend({

  gameStarted: false,

  userQuestionsLoading: Ember.computed('game.currentUserQuestion.id', 'game.state', function() {
    console.log('game.currentUserQuestion', this.get('game.currentUserQuestion.id'));
    let currentUserQuestionAvailable = this.get('game.currentUserQuestion.id') !== undefined;

    if (currentUserQuestionAvailable && !this.get('gameStarted')) {
      this.sendAction('transitionToQuestion', this.get('game.currentUserQuestion'));
      this.set('gameStarted', true);
    }

    if (this.get('game.state') === 'FINISHED') {
      return false;
    }

    return !currentUserQuestionAvailable || !this.get('gameStarted');
  })
});
