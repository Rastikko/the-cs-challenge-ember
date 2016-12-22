import Ember from 'ember';

export default Ember.Route.extend({

  beforeModel: function() {
    console.log('uid!', this.get('session.currentUser.uid'));
    return this.store.findRecord('game',this.get('session.currentUser.uid')).catch((data) => {
      console.log('ERROR', data);
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
