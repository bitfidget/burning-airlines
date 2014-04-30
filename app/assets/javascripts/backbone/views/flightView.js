BurningAirlines.Views.FlightView = Backbone.View.extend({
  el: '#main',

  initialize: function () {
    //fetch the template html
    this.template = _.template($('#flightView').html());

    console.log('Flight',this.model);
    console.log('Plane',this.model.plane);
  },

  render: function () {
    //pass in the flight model, generate html and update page
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  },

});