var rootDirectory, active, folderName;

function initDirectoryStructure(root) {
  rootDirectory = root;

  $.each(dirStructure, function(i, val) {
  }

  setActive(rootDirectory);
}

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

function fetchValidFolders(svgG) {
  var folderName = fetchFolderName(svgG);

}

  // start from root dir, make that circle larger and active


}