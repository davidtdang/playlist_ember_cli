import Ember from 'ember';

export default Ember.Controller.extend({
  actions:{
    search: function(){
      var qop = this.get('newSearchTerm');
      var request = gapi.client.youtube.search.list({
        q: qop,
        part: 'snippet'
      });

      request.execute(function(response) {

        console.log(response);
        console.log(response.items[0].snippet.title);
        console.log(response.items[0].snippet.thumbnails.default.url);
        console.log(response.items[0].id.videoId);
        console.log(response.items[0].snippet.description);



      });

    }
  }
});
