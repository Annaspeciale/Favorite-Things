

$(document).ready(function() {
  $("#survey form").submit(function(event) {


    var blanks = ["favoriteNumber","favoriteBand","favoriteColor"];

    blanks.forEach(function(blank) {
      var userInput = $("input#" + blank).val();
      $("." + blank).text(userInput);
    });

$("#results").show();



    event.preventDefault();
  });
});
