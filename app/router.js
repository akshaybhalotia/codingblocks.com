import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('courses', function() {
    this.route('crux');
    this.route('launchpad');
    this.route('pandora');
  });
  this.route('sign-up');
});

export default Router;
