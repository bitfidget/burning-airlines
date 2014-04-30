BurningAirlines.Views.FlightView = Backbone.View.extend({
  el: '#results',

  initialize: function () {
    //fetch the template html
    this.template = _.template($('#flightView').html()); 

    //TESTING - LOG THE MODEL DETAILS
    console.log('Flight:', this.model);
    console.log('Plane:', this.model.plane);
    console.log('Seats:', this.model.seats);
    console.log('Reservations:', this.model.reservations);
  },

  render: function () {
    //pass in the flight model, generate html and update page
    this.$el.html(this.template(this.model.toJSON()));

    //loop through every seat associated with a plane/flight
    var $row = $('<tr/>');
    $('#seats').append($row);
    var i = 1;
    var rows = this.model.get('plane').rows;
    this.model.seats.each(function(seat){
        var view = new BurningAirlines.Views.FlightSeatView({model: seat})
        //here, we want to append the seats cells to the seats table. But, we want to create various rows. 
        //These rows should correspond to the rows in the plane. 
        $row.append(view.render().el);
        if (i++ >= rows) {
          $row = $('<tr/>');
          $('#seats').append($row);
          i = 1;
        }
    });
    //return the view
    return this;
  },



});