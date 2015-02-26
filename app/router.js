import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {

  this.resource('videos', {path: '/'}, function() {
    this.route('show');
    this.route('search');
    this.route('results', {path: "/search/:query"});
  });

});

export default Router;
