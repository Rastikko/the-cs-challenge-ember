import Ember from 'ember';

export default Ember.Controller.extend({

  onQuestionStart: Ember.on('init', Ember.observer('model.userQuestions', function() {
    if (this.get('model.state') === 'NONE') {
      this.get('model').set('state', 'STARTED');
      this.get('model').save();
    }
  })),

  // getNextQuestion: function() {
  //   this.send('nextQuestion');
  // },
  //
  actions: {
    selectQuestion: function(question) {
      console.log('questionSelected:', question);
      this.set('model.answer', question);
      // TODO: save the question
      this.get('model').save();
      // TODO: transition after 200ms
      // Ember.run.later(this, this.getNextQuestion, 1000);
    }
  }
});
