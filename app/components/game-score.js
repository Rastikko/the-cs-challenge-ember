import Ember from 'ember';
import moment from 'moment';

export default Ember.Component.extend({

  userAnswer: Ember.computed.map('questions', function(question) {
    return question.get('userAnswer');
  }),

  correctAwnsers: Ember.computed.filterBy('userAnswer', 'correct', true),
  correctAwnsersLength: Ember.computed.readOnly('correctAwnsers.length'),

  questiosnLength: Ember.computed.readOnly('questions.length'),

  questionsTimeDiff: Ember.computed.map('questions', function(question) {
    return question.get('endTime') - question.get('startTime');
  }),

  totalTime: Ember.computed.sum('questionsTimeDiff'),

  totalTimeFormatted: Ember.computed('totalTime', function() {
    // for now just stub it
    let time = moment.duration(this.get('totalTime'));
    return `${time.minutes()}:${time.seconds()}`;
  })
});
