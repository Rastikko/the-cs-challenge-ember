import Ember from 'ember';

export default Ember.Route.extend({

  beforeModel: function() {
    return this.store.findRecord('game',this.get('session.currentUser.uid')).catch((data) => {
      return this._createNewGame();
    });
  },

  model: function() {
    return this.store.findRecord('game',this.get('session.currentUser.uid'));
  },

  _createNewGame: function() {
    let newGame = this.store.createRecord('game', {
      id: this.get('session.currentUser.uid'),
      uid: this.get('session.currentUser.uid'),
      state: 'NEW'
    });
    return newGame.save();
  }

});
