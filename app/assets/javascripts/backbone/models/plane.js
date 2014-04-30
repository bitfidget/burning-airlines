BurningAirlines.Models.Plane = Backbone.Model.extend({
  urlRoot: '/planes',

  initialize: function () {
    //create a seats collection and attach to this plane
    this.seats = new BurningAirlines.Collections.Seats();
    //run the create seats function to populate the collection with all available seats
    this.createSeats();
    console.log('Seats: ', this.seats);
  },

  createSeats: function () {

    var plane_id = this.get('id');

    for (var c = 1; c <= this.get('columns'); c++) {
      for (var r = 1; r <= this.get('rows'); r++) {
        var seat = new BurningAirlines.Models.Seat({plane_id: plane_id, row: r, column: c});
        this.seats.add(seat);
      }
    }
  }
});