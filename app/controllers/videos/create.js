import Ember from 'ember';

export default Ember.Controller.extend({
  var _this = this,
  actions:{
    create: function(){

      console.clear();
      var playlist = this.get("newPlaylistName");

    }
  }
});
