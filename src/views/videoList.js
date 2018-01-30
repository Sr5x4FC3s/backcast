var VideoListView = Backbone.View.extend({
  
  el: '.list',

  initialize: function() {
    this.render();
    // new VideoListEntryView({model: videos.models[0]});
  },

  template: templateURL('src/templates/videoList.html')

});

VideoListView.prototype.render = function() {
  this.$el.children().detach();
  this.$el.html(this.template());
  return this;
};
