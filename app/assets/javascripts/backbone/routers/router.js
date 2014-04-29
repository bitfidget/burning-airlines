BurningAirlines.Routers.appRouter = Backbone.Router.extend({
  routes: {
    '': 'search',
    'flights/:id': 'bookSeat',  
    '*anything': 'goHome'
  },
  search: function () {
    //create a new flights collection
    BurningAirlines.flights = new BurningAirlines.Collections.Flights();
    //fetch the flights from the server
    BurningAirlines.flights.fetch().done(function () {
      //create a view and pass in 'flights' and then render
      var view = new BurningAirlines.Views.SearchView({collection: BurningAirlines.flights});
      view.render();
    });
  },
  bookSeat: function (id) {
    //setup a new flight model with the id
    var flight = new BurningAirlines.Models.Flight({id: id});
    //fetch this flight from the server
    flight.fetch().done(function (){
      var view = new BurningAirlines.Views.FlightView({model: flight});
      view.render();  
    });
    
  },
  goHome: function () {
    document.location.hash = '';
  }
});