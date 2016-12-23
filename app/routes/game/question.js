import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    // return Ember.RSVP.hash({
    //   userQuestion: this.store.findRecord('userQuestion', params.question_id),
    //   game: this.store.findRecord('game',this.get('session.currentUser.uid'))
    // });
    return this.store.findRecord('userQuestion', params.question_id);
  }
});
