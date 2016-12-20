import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.findAll('question');
  },

  afterModel: function(questions) {
    if (!questions.get('firstObject')) {
      return this.transitionTo('create');
    }
    // TODO: jump to the next unanswered question
    if (questions.get('firstObject.userAnswer.id')) {
      return this.transitionTo('game.score');
    }
    this.transitionTo('game.question', questions.get('firstObject'));
    this.set('questionIndex', 0);
    this.set('questions', questions);
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
