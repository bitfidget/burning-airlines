BurningAirlines.Views.FlightView = Backbone.View.extend({
  el: '#results',

  initialize: function () {
    //fetch the template html
    this.template = _.template($('#flightView').html()); 

    //TESTING - LOG THE MODEL DETAILS
    console.log('Flight:', this.model);
    console.log('Plane:', this.model.plane);
    console.log('Seats:', this.model.seats);
  },

  render: function () {
    //pass in the flight model, generate html and update page
    this.$el.html(this.template(this.model.toJSON()));

    //loop through every seat associated with a plane/flight
    this.model.seats.each(function(seat){
      //generate the seat view
      var view = new BurningAirlines.Views.FlightSeatView({model: seat})
      //attach the seat view html to the seats table
      $('#seats').append(view.render().el);
    });
    //return the view
    return this;
  },

});