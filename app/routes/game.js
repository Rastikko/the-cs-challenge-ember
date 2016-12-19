import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.findAll('question');
  },

  afterModel: function(questions) {
    this.transitionTo('game.question', questions.get('firstObject'));
    this.set('questionIndex', 0);
    this.set('questions', questions)
  },

  actions: {
    nextQuestion: function() {
      this.incrementProperty('questionIndex');
      let questionIndex = this.get('questionIndex');
      let questions = this.get('questions');

      if (questionIndex < questions.get('length')) {
        this.transitionTo('game.question', questions.objectAt(questionIndex));
      } else {
        console.log('NO MORE QUESTIONS!');
      }
    }
  }
});
