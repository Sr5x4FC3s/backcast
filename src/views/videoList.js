var VideoListView = Backbone.View.extend({
  
  el: '.list',

  initialize: function() {
    this.listenTo(this.collection, 'sync', this.render);
  },

  template: templateURL('src/templates/videoList.html')

});

VideoListView.prototype.render = function() {
  this.$el.children().detach();
  this.$el.html(this.template());
  this.$el.find('h5').remove();
  var cacheEl = this.$el;
  this.collection.forEach(function(video) {
    entryView = new VideoListEntryView({model: video});
    console.log('render invoked');
    entryView.render();
    // cacheEl.on('click', video.select.bind(video));
  });
  return this;
};
