BurningAirlines.Views.SearchView = Backbone.View.extend({
  el: '#results',

  initialize : function () {
    this.template = _.template($('#searchView').html() );
  },

  render : function () {
    this.$el.html(this.template() );
    // return this;
    // debugger
    // go through every item in the collection and render each item
    this.collection.each(function (flight) {
      var view = new BurningAirlines.Views.SearchResultView({model: flight});
      $('#searchTable').append(view.render().el);
    });
  },

  events: {
    'submit': 'searchFlights' 
  },

  searchFlights : function (event) {
    event.preventDefault();
    
    // get the values from the input fields
    var searchOrigin = $('#searchOrigin').val();
    var searchDestination = $('#searchDestination').val();
    var searchResults = [];
    
    // need to make 4 different searches
    if ( (searchOrigin == '') && (searchDestination == '') ) {
      // 1. NO fields filled out
      console.log('null search')
      return null;

    } else if ( (searchOrigin == '') && (searchDestination != '') ) {
      // 2. Destination only
      console.log('destination search')
      this.collection.each(function (flight) {
        if (flight.attributes.destination == searchDestination) {
          searchResults.push(flight.attributes.id);
        };
      });

    } else if ( (searchOrigin != '') && (searchDestination == '') ) {
      // 3. Origin only
      console.log('origin search')
      this.collection.each(function (flight) {
        if (flight.attributes.origin == searchOrigin) {
          searchResults.push(flight.attributes.id);
        };
      });

    } else {
      // 4. Both filled in
      console.log('both search')
      this.collection.each(function (flight) {
        if ( (flight.attributes.origin == searchOrigin) && (flight.attributes.destination == searchDestination) ) {
          searchResults.push(flight.attributes.id);
        };
      });
    };
    // send the ids to the filter function
    console.log(searchResults);
    this.filterFlights(searchResults);
  },

  // a nice little function to deal with the hide/show of matching results
  // pass-in a list of matching ids
  filterFlights : function (ids){
    // hide ALL listings
    $('.search-listing').fadeOut(function() {
      // iterate though the array and reshow the ones with matching ids
      $.each(ids, function(i, id) {
        $('*[data-result="' + id + '"]').fadeIn();
      });
    });
  }


});