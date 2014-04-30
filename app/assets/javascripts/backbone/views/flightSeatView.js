BurningAirlines.Views.FlightSeatView = Backbone.View.extend({

  tagName: 'td',
  
  initialize: function () {
    this.template = _.template($('#seatView').html());
    
  },

  render: function () {

    this.$el.html(this.template(this.model.toJSON()));
    return this;
  },  

  events: {
    'click': 'reserve'
  },

  reserve: function () {
    //issues:
    //NO FLIGHT ID INCLUDED IN RESERVATION
    //NO USER ID ASSOCIATED WITH THE SEAT
    //NEED TO PREVENT DUPLICATE BOOKINGS OF THE SAME FLIGHT / SEAT

    // debugger;

    //get the plane_id, row number and column number for the clicked seat
    var plane_id = this.model.get('plane_id');
    var row = this.model.get('row');
    var column = this.model.get('column');

    console.log("you clicked seat: ", this.model.get('content'));

    var reservation = new BurningAirlines.Models.Reservation({plane_id: plane_id, row_no: row, column_no: column});
    reservation.save();
    
    console.log("reservation created: ", reservation);
  }

});

