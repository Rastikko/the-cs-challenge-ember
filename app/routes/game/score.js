import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.findAll('question');
  },

  afterMode: function() {
    // TODO: detect if the user did not awnser all the questions
  }
});
