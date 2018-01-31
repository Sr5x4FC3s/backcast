var SearchView = Backbone.View.extend({

  el: '.search-bar',

  initialize: function() {
    this.render();
  },

  render: function() {
    this.$el.html(this.template());
    $('.btn').on('click', function() {
      videos.search($('.form-control').val());
    });
    $('.form-control').keypress(function(event) {
      var keycode = (event.keyCode ? event.keyCode : event.which);
      if (keycode === 13) {
        videos.search($('.form-control').val());
      }
    });
    return this;
  },

  template: templateURL('src/templates/search.html')

});
