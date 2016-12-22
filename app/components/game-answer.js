import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'button',
  classNames: ['btn', 'btn-lg', 'btn-block'],

  classNameBindings: ['answerClass', 'disabled'],

  disabled: Ember.computed.bool('userAnswer.content'),

  answerClass: Ember.computed('userAnswer', 'userAnswerCorrect', 'answer', function() {
    const isUserAnswerThis = this.get('userAnswer.id') === this.get('answer.id');

    if (!this.get('userAnswer')) {
      return 'btn-primary';
    }

    if (isUserAnswerThis && this.get('userAnswerCorrect') === 'YES') {
      return 'btn-success';
    }

    if (isUserAnswerThis && this.get('userAnswerCorrect') === 'NO') {
      return 'btn-danger';
    }

    return 'btn-primary';
  }),

  click: function() {
    if (this.get('disabled')) {
      return;
    }
    this.sendAction('answerQuestion', this.get('answer'));
  }
});
