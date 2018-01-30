var Video = Backbone.Model.extend({

  initialize: function(video) {
    // override youtube's complex id field
    this.set('id', video.id.videoId);
    this.set('title', video.snippet.title);
    this.set('description', video.snippet.description);
    this.set('thumbnailUrl', video.snippet.thumbnails.default.url);
    this.set('thumbnailWidth', video.snippet.thumbnails.default.width);
    this.set('thumbnailHeight', video.snippet.thumbnails.default.height);
  },

  select: function() {
    console.log('clicked', this.get('title'));
    this.trigger('select', this);
  }

});
