import Ember from 'ember';

export default Ember.Component.extend({

  gameStarted: false,

  availableUserQuestions: Ember.computed.filter('model.userQuestions.@each.state', function(userQuestion) {
    return userQuestion.get('state') === 'NONE' || userQuestion.get('state') === 'STARTED';
  }),

  finishedUserQuestions: Ember.computed.filter('model.userQuestions.@each.state', function(userQuestion) {
    return userQuestion.get('state') === 'ANSWERED';
  }),

  userQuestionsLoading: Ember.computed('availableUserQuestions', 'finishedUserQuestions', 'model.state', function() {
    let readyUserQuestionsLength = this.get('availableUserQuestions.length') + this.get('finishedUserQuestions.length');
    let notAllQuestionsLoaded = readyUserQuestionsLength < this.get('model.userQuestions.length')
    let newGame = this.get('model.state') === 'NEW';
    let userQuestionsLoading = notAllQuestionsLoaded || newGame;

    // we create a sideeffect in order to allow the game controller to always go to the next available question
    this.set('model.availableUserQuestions', this.get('availableUserQuestions'));

    if (!userQuestionsLoading && !this.get('gameStarted')) {
      console.log('Users questions are loaded, starting new game :)');
      this.sendAction('transitionToNextAvailableQuestion');
      this.set('gameStarted', true);
    }
    return userQuestionsLoading;
  })
});
