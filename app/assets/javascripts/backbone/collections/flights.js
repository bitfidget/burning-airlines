BurningAirlines.Collections.Flights = Backbone.Collection.extend({
  url: '/flights',
  model: BurningAirlines.Models.Flight
});