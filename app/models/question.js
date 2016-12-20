import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  answers: DS.hasMany('answer'),
  userAnswer: DS.belongsTo('answer'),
  startTime: DS.attr('date'),
  endTime: DS.attr('date')
});
