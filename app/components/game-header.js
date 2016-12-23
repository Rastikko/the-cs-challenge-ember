import Ember from 'ember';

export default Ember.Component.extend({
  correctAwnsers: Ember.computed.filter('game.answeredUserQuestions.@each.correct', function(userQuestion) {
    return userQuestion.get('correct') === 'YES';
  }),

  userQuestionPoints: Ember.computed.mapBy('game.answeredUserQuestions', 'score'),
  totalPoints: Ember.computed.sum('userQuestionPoints')
});
