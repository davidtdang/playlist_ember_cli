import Ember from 'ember';

export default Ember.Controller.extend({
  // model:function(){

    //   console.clear();
    //   var playlist = this.get("newPlaylistName");
    //   return this.store.createRecord('playlist', {name: playlist});
    // },
    actions: {
      create: function(model) {
        console.clear();
        var _this = this;
        model.save().then(function() {
        _this.transitionToRoute('videos.search', model)
        console.log(model);
      });
    }
  }
});
