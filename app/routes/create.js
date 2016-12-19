import Ember from 'ember';

export default Ember.Route.extend({

  _addQuestion: function(question, awnsers) {
    let newQuestion = this.store.createRecord('question', question);

    awnsers.forEach((awnser) => {
      let newAwnser = this.store.createRecord('answer', awnser);
      newQuestion.get('answers').addObject(newAwnser);
      newAwnser.save();
    });

    newQuestion.save();
  },

  model: function() {
    this._addQuestion({ title: 'What is 1 + 1' }, [
      { title: '1', correct: false },
      { title: '2', correct: true },
      { title: '3', correct: false },
      { title: '4', correct: false } ]);
    this._addQuestion({ title: 'What is 2 + 1' }, [
      { title: '1', correct: false },
      { title: '2', correct: false },
      { title: '3', correct: true },
      { title: '4', correct: false } ]);
  }
});
