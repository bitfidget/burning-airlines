BurningAirlines.Views.SearchResultView = Backbone.View.extend({
  tagName: 'tr class="search-listing"',

  initialize : function () {
    this.template = _.template($('#searchResultView').html() );
  },

  render : function () {
    this.$el.attr('data-result', (this.model.attributes.id) );
    this.$el.html(this.template(this.model.toJSON() ) );
    return this;
  },

  events: {
    'click': 'bookSeats' 
  },

  bookSeats : function () {
    console.log('youre searching');
    BurningAirlines.router.navigate('flights/' + (this.model.attributes.id), true);
  }


});