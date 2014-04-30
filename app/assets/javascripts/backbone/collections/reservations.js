BurningAirlines.Collections.Reservations = Backbone.Collection.extend({
  initialize: function (options) {
    this.flight_id = options.flight_id;
  },

  url: function () {
    var url = ['/flights', this.flight_id, 'reservations'].join('/');
    return url;
  },

  model: BurningAirlines.Models.Reservation
});