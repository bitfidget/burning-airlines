BurningAirlines.Models.Flight = Backbone.Model.extend({
  urlRoot: '/flights',

  parse : function (response) {
    this.plane = new BurningAirlines.Models.Plane(response.plane);
    return response;
  }
});