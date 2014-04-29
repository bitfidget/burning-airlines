BurningAirlines.Views.SearchResultView = Backbone.View.extend({
  tagName: 'tr',

  initialize : function () {
    this.template = _.template($('#searchResultView').html() );
  },

  render : function () {
    this.$el.html(this.template(this.model.toJSON() ) );
    return this;
  },

  events: {
    'click': 'bookSeats' 
  },

  bookSeats : function () {
    console.log('youre searching');
  }


});