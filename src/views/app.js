var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    var vidArray = [];
    //change to source of data when doing real app
    fakeVideoData.forEach(function(videoDatum) {
      var video = new Video(videoDatum);
      vidArray.push(video);
    });
    this.videos = new Videos(vidArray);
    this.render();
    videoListView = new VideoListView({collection: this.videos});
    videoListView.render();
    videoPlayerView = new VideoPlayerView();
  },


  render: function() {
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/app.html'),

  

});
