import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    console.log('params.question_id', params.question_id);
    return this.store.findRecord('question', params.question_id);
  }
});
