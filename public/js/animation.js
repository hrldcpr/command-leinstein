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
  if (name == "..") {
    setActive(active.parent);
  } else if (name == ".") {
    setActive(active);
  } else {
    var child = active.children.filter(function (x) {
        return x.name == name;
     });
    setActive(child[0]);
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

function controlL() {
  $("#print-out").html("");
}