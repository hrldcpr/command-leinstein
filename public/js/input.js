$(function() {

  // capture user input
  $("#submit").click(function(event) {
    event.preventDefault();
    event.stopPropagation();
    var userInput = $("#command").val();

    $("#result").text(userInput);
  });

});