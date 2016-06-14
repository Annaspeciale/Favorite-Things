

$(document).ready(function() {
  $("#survey form").submit(function(event) {
    var favoriteNumber = $("input#favoriteNumber").val();
    var favoriteBand = $("input#favoriteBand").val();
    var favoriteColor = $("input#favoriteColor").val();

    var array = [favoriteNumber,favoriteBand,favoriteColor];



    alert(array)



    event.preventDefault();
  });
});
