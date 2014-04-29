BurningAirlines.Views.SearchView = Backbone.View.extend({
  el: '#main',

  initialize : function () {
    this.template = _.template($('#searchView').html() );
  },

  render : function () {
    this.$el.html(this.template() );
  },

  events: {
    'submit': 'searchFlights' 
  },

  searchFlights : function () {
    console.log('youre searching');
  }


});