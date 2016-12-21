import Ember from 'ember';

export default Ember.Route.extend({

  beforeModel: function() {
    return this.store.query('game', { uid: this.get('session.currentUser.uid') } ).then((data) => {
      if (data.get('length') === 0) {
        return this._createNewGame();
      }
    });
  },

  model: function() {
    return this.store.query('game', { uid: this.get('session.currentUser.uid') } ).then((games) => {
      return games.get('firstObject');
    });
  },

  // afterModel: function(game) {
  //   Ember.run.later(this, function() {
  //     console.log('userQuestions', game.get('userQuestions'));
  //   }, 1000);
  //   // console.log('userQuestions', game.get('userQuestions.length'));
  //   // if (game.get('userquestions')) {
  //   //   // this.transitionTo('game.score');
  //   // } else {
  //   //   // this.transitionTo('game.question', game.get('userQuestions.0'));
  //   // }
  //   console.log('afterModel: ', game);
  //   // if (!game.get('id')) {
  //   //   let newGame = this.store.createRecord('game', {
  //   //     id: this.get('session.id'),
  //   //     state: 'NEW'
  //   //   });
  //   //   newGame.save();
  //   // }
  //   // if (!questions.get('firstObject')) {
  //   //   return this.transitionTo('create');
  //   // }
  //   // // TODO: jump to the next unanswered question
  //   // if (questions.get('firstObject.userAnswer.id')) {
  //   //   return this.transitionTo('game.score');
  //   // }
  //   // this.transitionTo('game.question', questions.get('firstObject'));
  //   // this.set('questionIndex', 0);
  //   // this.set('questions', questions);
  // },

  // initHandler: Ember.on('init', function() {
  //   this.set('questionIdex', 0);
  //   this.set('gameStarted', false);
  //   this.set('game', null);
  // }),

  // TODO: figure out this shit
  // inProgressObserver: Ember.observer('game.state', function() {
  //   if (this.get('game.state') === 'INPROGRESS' && !this.get('gameStarted')) {
  //     this._transitionToNextAvailableQuestion();
  //     this.set('gameStarted', true);
  //   }
  // }),
  // availableUserQuestions: Ember.computed.filter('game.userQuestions.[]', function(userQuestion) {
  //   console.log('userQuestion!', userQuestion);
  //   console.log('userQuestionState!', userQuestion.get('state') );
  //   return userQuestion.get('state') === 'NONE';
  // }),
  //
  // _transitionToNextAvailableQuestion: function() {
  //   console.log('game: ', this.get('game'));
  //   console.log('availableUserQuestions', this.get('availableUserQuestions'));
  // },

  _createNewGame: function() {
    let newGame = this.store.createRecord('game', {
      uid: this.get('session.currentUser.uid'),
      state: 'NEW'
    });
    return newGame.save();
  },

  actions: {
    nextQuestion: function() {
      this.incrementProperty('questionIndex');
      let questionIndex = this.get('questionIndex');
      let questions = this.get('questions');

      if (questionIndex < questions.get('length')) {
        this.transitionTo('game.question', questions.objectAt(questionIndex));
      } else {
        this.transitionTo('game.score');
      }
    }
  }
});
