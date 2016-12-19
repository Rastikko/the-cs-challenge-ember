import Ember from 'ember';

export default Ember.Controller.extend({

  getNextQuestion: function() {
    this.send('nextQuestion');
  },

  actions: {
    selectQuestion: function(question) {
      console.log('questionSelected:', question);
      this.set('model.userAnswer', question);
      // TODO: save the question
      // TODO: transition after 200ms
      Ember.run.later(this, this.getNextQuestion, 1000)
    }
  }
});
