import DS from 'ember-data';

export default DS.Model.extend({
  uid: DS.attr('string'),
  state: DS.attr('string'),
  finishedTime: DS.attr('date'),
  score: DS.attr('number'),
  currentUserQuestion: DS.belongsTo('user-question'),
  answeredUserQuestions: DS.hasMany('user-question')
});
