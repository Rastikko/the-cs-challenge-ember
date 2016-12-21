import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return this.store.findRecord('userQuestion', params.question_id);
  },

  afterModel: function(userQuestion) {
    // userQuestion.set('state', 'STARTED');
    // userQuestion.save();
  }
});
