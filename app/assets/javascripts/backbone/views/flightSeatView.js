BurningAirlines.Views.FlightSeatView = Backbone.View.extend({
  tagName: 'td',

  initialize: function () {
    this.template = _.template($('#seatView').html());
    
  },

  render: function () {

    this.$el.html(this.template(this.model.toJSON()));
    return this;
  }
});

