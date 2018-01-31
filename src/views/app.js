var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    window.selected = 0;
    this.render();
    videoListView = new VideoListView({collection: this.collection});
    videoListView.render();
    videoPlayerView = new VideoPlayerView({collection: this.collection});
    searchView = new SearchView();  
  },


  render: function() {
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/app.html'),

  

});
