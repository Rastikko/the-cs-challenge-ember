import DS from 'ember-data';

export default DS.Model.extend({
  question: DS.belongsTo('question'),
  answer: DS.belongsTo('answer'),
  state: DS.attr('string'),
  startTime: DS.attr('date'),
  endTime: DS.attr('date')
});
