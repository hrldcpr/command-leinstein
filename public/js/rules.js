$(function() {

  var dirStructure, active, folderName;

  // fetch json that D3 is using for visualization
  $.getJSON("./public/js/test.json", function(data) {
    dirStructure = data;
  });

  // set active elements
  function setActive(newActive) {
    if (active) {
      active.removeClass("active");
    }
    active = newActive;
    active.find("circle").attr("r", "12");
    active.addClass("active");
  }

  // find file name
  function fetchFolderName(svgG) {
    return svgG.find("text").html();
  }

  // start from root dir, make that circle larger and active
  function initRoot() {
    if ($("circle").length == 26) {
      setActive($(".node").first());
    } else {
      setTimeout(initRoot, 100);
    }
  }
  initRoot();

});