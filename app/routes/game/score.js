import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.findRecord('game',this.get('session.currentUser.uid'));
  }
});
