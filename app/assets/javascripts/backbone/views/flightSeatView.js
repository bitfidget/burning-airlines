BurningAirlines.Views.FlightSeatView = Backbone.View.extend({
  //assign the tag that we'll use when we create a seat. In this case, a table cell to go inside the table body.   
  tagName: 'td',
  
  initialize: function () {
    this.template = _.template($('#seatView').html());
    
  },

  render: function () {
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  },  

  events: {
    'click': 'reserve',
    'change': 'render'
  },

  reserve: function () {
    //issues:
    //NO USER ID ASSOCIATED WITH THE SEAT

    //get the flight_id, row number and column number for the clicked seat
    var flight_id = this.model.get('flight_id');
    var row = this.model.get('row');
    var column = this.model.get('column');

    //create a new reservation with required data
    var reservation = new BurningAirlines.Models.Reservation({flight_id: flight_id, row_no: row, column_no: column});
    //save the reservation
    reservation.save().done(function(){
      //re-render the flight view
      BurningAirlines.flight.getReservations();
    });
    
    console.log("reservation created: ", reservation);

  }

});

