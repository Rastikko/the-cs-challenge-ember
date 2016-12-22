import Ember from 'ember';

export default Ember.Component.extend({

  isQuestionResponded: Ember.computed('model.answer', 'model.state', function() {
    if (this.get('model.state') === 'NONE') {
      this.get('model').set('state', 'STARTED');
      this.get('model').save();
    }
    return !!this.get('model.answer');
  }),

  actions: {
    startNextQuestion: function() {
      this.sendAction('startNextQuestion');
    }
  }
});
