var VideoPlayerView = Backbone.View.extend({

  el: '.player',

  initialize: function() {
    this.model = this.collection.at(window.selected);
    this.render();
    console.log(this.collection, this.model);
    this.listenTo(this.collection, 'select', this.changeView);
  },
  
  template: templateURL('src/templates/videoPlayer.html'),

  changeView: function(selectedVideo) {
    this.model = this.collection.at(window.selected);
    console.log(this.model);
    this.render();
  },

  render: function() {
    var title = this.model.get('title');
    var description = this.model.get('description');
    var id = this.model.get('id');
    this.$el.html(this.template({id, title, description}));
    this.el = title;
  }

});
