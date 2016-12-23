import Ember from 'ember';

export default Ember.Component.extend({

  gameStarted: false,

  userQuestionsLoading: Ember.computed('game.userQuestions.length', 'game.state', function() {
    let availableUserQuetions = this.get('game.userQuestions.length')  > 0;

    if (availableUserQuetions && !this.get('gameStarted')) {
      this.sendAction('transitionToNextAvailableQuestion');
      this.set('gameStarted', true);
      return false;
    }

    // TODO: debug why second game does not work
    console.log('availableUserQuetions', availableUserQuetions);
    return !availableUserQuetions;
  })
});
