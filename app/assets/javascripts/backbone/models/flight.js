BurningAirlines.Models.Flight = Backbone.Model.extend({
  urlRoot: '/flights',

  parse: function (response) {
    //create a plane object attached to this flight with plane data
    this.plane = new BurningAirlines.Models.Plane(response.plane);
    return response;
  },

  initialize: function () {
    //create a a new seats collection
    this.seats = new BurningAirlines.Collections.Seats();
    //setup event handler so that when sync completes, populate seats! 
    //This needs to wait as plane rows / columns are required to create seats
    this.on('sync', this.createSeats)
  }, 

  createSeats: function () {

    //get the flight id from the flight model so this can be saved within seats
    flight_id = this.get('id');

    //loop through and create all seats, adding these to the collection
    for (var c = 1; c <= this.plane.get('columns'); c++) {
      for (var r = 1; r <= this.plane.get('rows'); r++) {
        var seat = new BurningAirlines.Models.Seat({row: r, column: c, flight_id: flight_id});
        this.seats.add(seat);
      }
    }
  }
});