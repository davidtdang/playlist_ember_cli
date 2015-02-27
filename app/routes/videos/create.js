
import Ember from 'ember';

export default Ember.Route.extend({
 model: function(){
   var playlist = this.modelFor('playlists/show')
   return this.store.createRecord('video', {playlist: playlist});
 },
 actions: {
   addVideo: function(video) {
     // var playlistController = this.get('controllers.playlists.show')
     var playlist = this.modelFor('playlists/show')
     var song = this.store.createRecord('song', {playlist: playlist, name: video.title, url: video.url})
     song.save()
   }
 }
});
