import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel: function() {
    return this.get('session').fetch().catch(function() {});
  },
  actions: {
    signIn: function(provider) {
      this.get('session').open('firebase', { provider: provider}).then((data) => {
        this.transitionTo('index');
      });
    },
    signOut: function() {
      this.get('session').close();
      this.transitionTo('login');
    }
  }
});
