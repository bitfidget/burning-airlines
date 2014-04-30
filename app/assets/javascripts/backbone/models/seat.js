BurningAirlines.Models.Seat = Backbone.Model.extend({
  defaults: {
    content: undefined,
    occupied: false
  },

  initialize: function() {
    this.getSeat();
  },

  getSeat: function() {
    //convert the column number to a letter
    letter = this.convertToLetter(this.get('column'));
    //setup the seat code value
    seatCode = [letter, this.get('row')].join('');
    //set the 'content' variable on this seat
    this.set('content', seatCode);
    return seatCode;
  },

  //converts a given column number to a letter
  convertToLetter: function(num) {
    //an array of all letters
    var letters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    //return the number minus 1 (due to array index starting from 0)
    return letters[num - 1];
  }
});