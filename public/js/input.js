$(function() {

  $("#submit").click(function(event) {
    event.preventDefault();
    event.stopPropagation();

    var userInput = $("#command").val();
    $("#command").val("");
    
    var changeDir = userInput.match(/^cd (.*)/);
    var listDir = userInput.match(/^ls/);
    var clear = userInput.match(/^clear/);

    if (changeDir) {
      cd(changeDir[1]);
    } else if (listDir) {
      ls(userInput);
    } else if (clear) {
      controlL();
    }
  });

});