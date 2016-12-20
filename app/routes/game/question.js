import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return this.store.findRecord('question', params.question_id);
  },

  afterModel: function(question) {
    question.set('startTime', new Date());
    question.save();
  }
});
