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
    // debugger;
    //loop through every seat associated with a plane/flight
    this.model.plane.seats.each(function(seat){
        var view = new BurningAirlines.Views.FlightSeatView({model: seat})
        $('#seats').append(view.render().el);
    });
    //return the view
    return this;
  },

});