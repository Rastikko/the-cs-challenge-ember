import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.query('game', { uid: this.get('session.currentUser.uid') } ).then((games) => {
      return games.get('firstObject');
    });
  }
});
