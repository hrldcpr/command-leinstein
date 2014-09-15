$(function() {

  $("#submit").click(function(event) {
    event.preventDefault();
    event.stopPropagation();
    var command = $("#command");
    var userInput = command.val();
    command.val("");
    var dir = userInput.match(/^cd (.*)/);
    if (dir) cd(dir[1]);
  });

});