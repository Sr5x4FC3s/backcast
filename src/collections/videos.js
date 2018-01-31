var Videos = Backbone.Collection.extend({

  model: Video,
  
  search: function() {
    $.ajax({
      cache: false,
      data: $.extend({
        key: 'AIzaSyCyWJDpKiHPyWLy4JjgTPA8QGAdc6aD6qs',
        q: 'surfing',
        part: 'snippet'
      }, {maxResults: 5}),
      dataType: 'json',
      type: 'GET',
      timeout: 5000,
      url: 'https://www.googleapis.com/youtube/v3/search',
      success: function(result) {
        console.log('success', result);
      }
    });
  }
});
