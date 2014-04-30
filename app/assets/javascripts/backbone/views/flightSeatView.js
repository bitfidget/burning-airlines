BurningAirlines.Views.FlightSeatView = Backbone.View.extend({
  //assign the tag that we'll use when we create a seat. In this case, a table cell to go inside the table body.   
  tagName: 'td',
  
  initialize: function () {
    this.template = _.template($('#seatView').html());
    
  },

  render: function () {

    this.$el.html(this.template(this.model.toJSON()));
    return this;
  }
});

