import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'button',
  classNames: ['btn', 'btn-lg', 'btn-block'],

  classNameBindings: ['answerClass', 'disabled'],

  disabled: Ember.computed.bool('userAnswer.content'),

  answerClass: Ember.computed('userAnswer', function() {
    console.log('userAnswer!', this.get('userAnswer'));

    if (!this.get('userAnswer')) {
      return 'btn-primary';
    }

    const isThisCorrectAwnser = this.get('model.correct');
    const isuserAnswerThis = this.get('userAnswer.id') === this.get('model.id');

    if (isThisCorrectAwnser) {
      return 'btn-success';
    } else if (isuserAnswerThis) {
      return 'btn-danger'
    } else {
      return 'btn-primary';
    }
  }),

  click: function() {
    if (this.get('disabled')) {
      return;
    }
    this.sendAction('selectQuestion', this.get('model'));
  }
});
