import Ember from 'ember';
import moment from 'moment';

export default Ember.Component.extend({

  correctAwnsers: Ember.computed.filter('game.answeredUserQuestions.@each.correct', function(userQuestion) {
    return userQuestion.get('correct') === 'YES';
  }),

  correctAwnsersLength: Ember.computed.readOnly('correctAwnsers.length'),

  questionsTimeDiff: Ember.computed.map('game.answeredUserQuestions.@each.endTime', function(userQuestion) {
    return userQuestion.get('endTime') - userQuestion.get('startTime');
  }),

  totalTime: Ember.computed.sum('questionsTimeDiff'),

  totalTimeFormatted: Ember.computed('totalTime', function() {
    // for now just stub it
    let time = moment.duration(this.get('totalTime'));
    let minutesFormat = '';
    if (time.minutes()) {
      minutesFormat = `${time.minutes()} minutes and `;
    }

    return minutesFormat + `${time.seconds()} seconds.`;
  }),

});
