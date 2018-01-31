var Videos = Backbone.Collection.extend({

  model: Video,
  
  search: function(search) {
    $.ajax({
      cache: false,
      data: $.extend({
        key: 'AIzaSyCyWJDpKiHPyWLy4JjgTPA8QGAdc6aD6qs',
        q: search,
        part: 'snippet'
      }, {maxResults: 5}),
      dataType: 'json',
      type: 'GET',
      timeout: 5000,
      url: 'https://www.googleapis.com/youtube/v3/search',
      success: function(result) {
        console.log('ajax success!');
        videos.getNewVideos.call(videos, result);
      }
    });
  },

  getNewVideos: function(result) {
    var items = result.items;
    var newVids = [];
    items.forEach(function(item, index, array) {
      var newVideo = new Video(item);
      newVids.push(newVideo);
    }, this);
    this.reset(newVids);
    new AppView({collection: this});
  }
});
