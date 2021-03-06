import Ember from 'ember';

// TODO: this is not really 1 day...
const MINUTES_30 = 1800000;

export default Ember.Route.extend({
  beforeModel: function() {
    if (this.get('session.currentUser.uid')) {
      return this.store.findRecord('game', this.get('session.currentUser.uid')).then((game) => {
        let finishedTime = game.get('finishedTime');
        if (game.get('state') === 'FINISHED' && game.get('finishedTime')) {
          let now = new Date();
          if (now - finishedTime > MINUTES_30) {
            this.store.deleteRecord(game);
            return game.save();
          }
        }
      }).catch(() => {});
    } else {
      this.transitionTo('login');
    }
  },

  model: function() {
    return this.store.findRecord('game', this.get('session.currentUser.uid')).catch(() => {});
  }
});
