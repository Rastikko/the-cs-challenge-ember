import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return Ember.RSVP.hash({
      game:  this.store.findRecord('game',this.get('session.currentUser.uid')),
      scores: this.store.findAll('score')
    });
  }
});
