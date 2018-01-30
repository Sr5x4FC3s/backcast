var VideoListEntryView = Backbone.View.extend({

  el: '.video-list',

  initialize: function() {
    
  },

  render: function() {
    var title = this.model.get('title');
    var id = this.model.get('id');
    this.$el.find('h1').remove();
    var node = $(this.template({title}));
    node.attr('id', id);
    node.on('click', this.model.select.bind(this.model));
    this.$el.append(node);
    this.el = node.text();
  },

  template: templateURL('src/templates/videoListEntry.html')

});
