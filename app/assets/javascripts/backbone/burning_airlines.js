//= require_self
//= require_tree ./templates
//= require_tree ./models
//= require_tree ./collections
//= require_tree ./views
//= require_tree ./routers

// Use Handlebars/Moustache style templates to prevent conflict with ERB.
_.templateSettings = {
  interpolate: /\{\{(.+?)\}\}/g
};

window.BurningAirlines = {
  Models: {},
  Collections: {},
  Routers: {},
  Views: {}
};

$(document).ready(function () {
  // BurningAirlines.planes = new BurningAirlines.Collections.Planes();
  // BurningAirlines.planes.fetch();

  // flights = new BurningAirlines.Collections.Flights();
  // flights.fetch().done(function () {
  //   var view = new BurningAirlines.Views.SearchView({collection: flights});
  //   view.render();
  // });

  BurningAirlines.flights = new BurningAirlines.Collections.Flights();
  BurningAirlines.flights.fetch().done( showView );

  // BurningAirlines.reservations = new BurningAirlines.Collections.Reservations();
  // BurningAirlines.reservations.fetch();

});

//TEST OF FLIGHT / RESERVATION PAGE
var showView = function () {
  var flight = BurningAirlines.flights.models[0];
  console.log('running',flight);
  var view = new BurningAirlines.Views.FlightView({model: flight});
  view.render();
};


