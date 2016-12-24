import Ember from 'ember';

export default Ember.Controller.extend({

    gameInProgress: Ember.computed.equal('model.state', 'INPROGRESS'),
    gameFinished: Ember.computed.equal('model.state', 'FINISHED'),

});
