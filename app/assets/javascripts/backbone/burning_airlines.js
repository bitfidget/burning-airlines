//= require_self
//= require_tree ./templates
//= require_tree ./models
//= require_tree ./collections
//= require_tree ./views
//= require_tree ./routers

window.BurningAirlines = {
  Models: {},
  Collections: {},
  Routers: {},
  Views: {}
};

$(document).ready(function () {
  planes = new BurningAirlines.Collections.Planes();
  planes.fetch();

  flights = new BurningAirlines.Collections.Flights();
  flights.fetch();

  reservations = new BurningAirlines.Collections.Reservations();
  reservations.fetch();

  plane = new BurningAirlines.Models.Plane({
    rows: 3,
    columns: 3,
    model: '747'
  });
  
  plane.save();

  var view = new BurningAirlines.Views.SearchView();
  view.render();

});


