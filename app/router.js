import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('game', function() {
    this.route('question', {path: '/question/:question_id'});
    this.route('score');
  });
  this.route('create');
  this.route('login');
});

export default Router;
