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
  planes = new BurningAirlines.Collections.Planes();
  planes.fetch();

  flights = new BurningAirlines.Collections.Flights();
  flights.fetch().done(function () {
    var view = new BurningAirlines.Views.SearchView({collection: flights});
    view.render();
    Backbone.history.start({pushState: false}); // Modernizr.history});
  });

  reservations = new BurningAirlines.Collections.Reservations();
  reservations.fetch();

  plane = new BurningAirlines.Models.Plane({
    rows: 3,
    columns: 3,
    model: '747'
  });
  
  plane.save();

  

});


