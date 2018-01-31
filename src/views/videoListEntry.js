var VideoListEntryView = Backbone.View.extend({

  el: '.video-list',

  initialize: function() {
    
  },

  render: function() {
    var title = this.model.get('title');
    var id = this.model.get('id');
    var description = this.model.get('description');
    var thumbnailUrl = this.model.get('thumbnailUrl');
    var node = $(this.template({thumbnailUrl, title, description}));
    node.attr('id', id);
    node.on('click', this.model.select.bind(this.model));
    this.$el.append(node);
    this.el = node.text();
  },

  template: templateURL('src/templates/videoListEntry.html')

});
