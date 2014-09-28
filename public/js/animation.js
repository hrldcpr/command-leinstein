var rootDirectory, active, folderName;

function initDirectoryStructure(root) {
  rootDirectory = root;

  initNode(rootDirectory);
  setActive(rootDirectory);
}

function initNode(node, parent) {
  node.parent = parent;
  node.g = $('#node-' + node.name);

  if (node.children) {
    node.children.forEach(function (child) {
      initNode(child, node);
    });
  }
}

function setActive(newActive) {
  if (!newActive) {
    alert("no such directory!");
    return;
  }

  if (active) {
    active.g.removeClass("active");
    active.g.find("circle").attr("r", "4.5");
    active.g.find("text").attr("dy", "-9");
  }

  active = newActive;
  active.g.find("text").attr("dy", "-16");
  active.g.find("circle").attr("r", "12");
  active.g.addClass("active");
}

function cd(name) {
  controlL();

  var folders = name.split("/");
  var firstFolder = folders[0];

  if (firstFolder == "..") {
    setActive(active.parent);
  } else if (firstFolder == ".") {
    setActive(active);
  } else {
    folders.forEach(function (folder) {
      var child = active.children.filter(function (x) {
          return x.name == folder;
       });
      setActive(child[0]);
    });
  }
}

function printToScreen(array) {
  var html = "<ul>";
  array.forEach(function (item) {
    html += ("<li>" + item.name + "</li>");
  });
  html += "</ul>";
  $("#print-out").html(html);
}

function ls(userInput) {
  var location = userInput.match(/^ls (.*)/);
  if (location === null || location[1] == ".") {
    printToScreen(active.children);
  } else if (location[1] == "..") {
    printToScreen(active.parent.children);
  } else {
    alert("functionality not built out yet!");
  }
}

function pwd() {
  printToScreen([active]);
}

function controlL() {
  $("#print-out").html("");
}