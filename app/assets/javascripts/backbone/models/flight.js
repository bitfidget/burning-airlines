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
    //loop through and create all seats, adding these to the collection
    for (var c = 1; c <= this.plane.get('columns'); c++) {
      for (var r = 1; r <= this.plane.get('rows'); r++) {
        var seat = new BurningAirlines.Models.Seat({row: r, column: c});
        this.seats.add(seat);
      }
    }
  }
});