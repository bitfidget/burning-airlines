BurningAirlines.Models.Seat = Backbone.Model.extend({
  defaults: {
    username: undefined
  },

  getSeat: function() {
    //convert the column number to a letter
    letter = this.convertToLetter(this.get('column'));
    //return the letter + row
    return [letter,this.get('row')].join('');
  },

  //converts a given column number to a letter
  convertToLetter: function(num) {
    //an array of all letters
    var letters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    //return the number minus 1 (due to array index starting from 0)
    return letters[num - 1];
  }
});