import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('videos', function() {
    this.route('show');
    this.route('search');
    this.route('results', {path: "/search/:query"});
  });

  this.route('playlists', function() {
    this.route('create');
    this.route('show', {path: "/:playlist_id"}, function() {
      this.resource('videos', function() {
        this.route('search');
      });
    });
  });
});

export default Router;
