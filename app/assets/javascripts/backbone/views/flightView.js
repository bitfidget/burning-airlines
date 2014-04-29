BurningAirlines.Views.FlightView = Backbone.View.extend({
  el: '#main',

  initialize: function () {

    //convert the plane attribute into a model and store as 'plane'
    // var plane = this.model.attributes.plane;
    // this.plane = new BurningAirlines.Models.Plane({model: plane});

    //THIS SHOULD BE REFACTORED AS A PLANE OBJECT
    this.plane = this.model.attributes.plane;

    //add a seats collection and populate this with seats
    this.seats = new BurningAirlines.Collections.Seats();
    this.createSeats();

    //fetch the template html
    this.template = _.template($('#flightView').html());
    
    //TESTING
    console.log(this);
  },

  render: function () {
    this.$el.html(this.template(this.model.toJSON()));

    return this;
  },

  createSeats: function () {
    
    for (var c = 1; c <= this.plane.columns; c++) {
      for (var r = 1; r <= this.plane.rows; r++) {
        var seat = new BurningAirlines.Models.Seat({row: r, column: c});
        this.seats.add(seat);
      }
    }
  }

});