BurningAirlines.Models.Reservation = Backbone.Model.extend({
  urlRoot: '/reservations',

  parse: function (response) {    
    this.user = new BurningAirlines.Models.User(response.user);
    return response;
  }

   

});