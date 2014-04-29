BurningAirlines.Routers.appRouter = Backbone.Router.extend({
  routes: {
    '': 'search',
    'flights/:id': 'bookSeat',  
    '*anything': 'goHome'
  },
  search: function () {
    var view = new BurningAirlines.Views.searchView({collection: BurningAirlines.flights});
    view.render();
  },
  bookSeat: function () {
    //using other view to test for now. Will update when real view is finished. 
    var view = new BurningAirlines.Views.searchView({collection: BurningAirlines.flights});
    view.render();
  },
  goHome: function () {
    document.location.hash = '';
  }
});