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
    this.on('sync', this.createSeats);
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
    this.getReservations();
  },

  getReservations: function () {
    this.reservations = new BurningAirlines.Collections.Reservations({flight_id: this.id});
    //bind ensures that 'this' refers to the correct context when inside, checkSeats
    this.reservations.fetch().done(_.bind(this.checkSeats, this));

  },

  checkSeats: function () {
    var self = this;

    //loop through all reservations for this flight
    this.reservations.each(function (reservation) {

      //find the seat that matches this reservation (get the first seat returned with [0])
      var seat = self.seats.where({
        row: reservation.get('row_no'), 
        column: reservation.get('column_no')
      })[0];

      //get the username for the user attached to the reservation
      var user_name = reservation.user.get('username');
      var user_id = reservation.user.get('id');
      
      //set the content of an occupied seat to X
      seat.set('content', user_name);
      //set the seat to be occupied
      seat.set('occupied', user_id);
      //set the reservation id
      seat.set('reservation_id', reservation.id);
    });

    console.log('SEATS: ',self.seats);

    //re-render the flight view
    BurningAirlines.view.render();
  }


});