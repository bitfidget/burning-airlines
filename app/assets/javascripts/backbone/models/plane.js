BurningAirlines.Models.Plane = Backbone.Model.extend({
  urlRoot: '/planes',

  initialize: function () {
    this.seats = new BurningAirlines.Collections.Seats();
    this.createSeats();
    console.log('Seats: ', this.seats);
  },

  createSeats: function () {

    for (var c = 1; c <= this.get('columns'); c++) {
      for (var r = 1; r <= this.get('rows'); r++) {
        var seat = new BurningAirlines.Models.Seat({row: r, column: c});
        this.seats.add(seat);
      }
    }
  }
});