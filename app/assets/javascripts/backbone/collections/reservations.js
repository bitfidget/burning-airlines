BurningAirlines.Collections.Reservations = Backbone.Collection.extend({
  url: '/reservations',
  model: BurningAirlines.Models.Reservation
});