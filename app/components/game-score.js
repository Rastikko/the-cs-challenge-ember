import Ember from 'ember';
import moment from 'moment';

/*

<td class="col-md-10">{{totalTimeFormatted}}</td>
</tr>
<tr>
<th class="col-md-2">Correct questions</th>
<td class="col-md-10">{{correctAwnsersLength}} / {{questiosnLength}}</td>

**/

export default Ember.Component.extend({

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
  })

});
