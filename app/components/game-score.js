import Ember from 'ember';
import moment from 'moment';

export default Ember.Component.extend({

  isGameFinished: Ember.computed('game', 'game.state', function() {
    console.log('game state', this.get('game.state'));
    let isGameFinished = this.get('game.state') === 'FINISHED';
    // TODO: set up rule or define on backend
    if (!isGameFinished) {
      Ember.run.later(this, this._finishGame, 100);
    }
    return isGameFinished;
  }),

  correctAwnsers: Ember.computed.filter('game.userQuestions', function(userQuestion) {
    return userQuestion.get('correct') === 'YES';
  }),

  questiosnLength: Ember.computed.readOnly('game.userQuestions.length'),
  correctAwnsersLength: Ember.computed.readOnly('correctAwnsers.length'),

  questionsTimeDiff: Ember.computed.map('game.userQuestions', function(userQuestion) {
    return userQuestion.get('endTime') - userQuestion.get('startTime');
  }),

  totalTime: Ember.computed.sum('questionsTimeDiff'),

  totalTimeFormatted: Ember.computed('totalTime', function() {
    // for now just stub it
    let time = moment.duration(this.get('totalTime'));
    return `${time.minutes()}:${time.seconds()}`;
  }),

  _finishGame: function() {
    this.set('game.state', 'FINISHED');
    this.get('game').save();
  }

});
