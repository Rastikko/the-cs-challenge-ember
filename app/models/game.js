import DS from 'ember-data';

export default DS.Model.extend({
  uid: DS.attr('string'),
  state: DS.attr('string'),
  userQuestions: DS.hasMany('user-question')
});
