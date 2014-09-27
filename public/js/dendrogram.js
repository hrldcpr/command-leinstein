$(function() {

  d3.json("./public/js/test.json", function(error, root) {
    initDirectoryStructure(root);
  end

  function update(source) {
    var nodes = cluster.nodes(root),
        linknks = cluster.links(nodes);

    var link = svg.selectAll(".link")
        .data(links);
    
    var linkEnter = link.enter().append("path")
        .attr("class", "link")
        .attr("d", diagonal);

    var node = svg.selectAll(".node")
        .data(nodes);

    // node enter
    var nodeEnter = node.enter().append("g")
        .attr("id", function(d) { return "node-" + d.name; })
        .attr("class", "node")
        .attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; });

    nodeEnter.append("circle")
        .attr("r", 4.5);

    nodeEnter.append("text")
        .attr("dy", "-9")
        .style("text-anchor", "middle")
        .text(function(d) { return d.name; });

    // node update
    var nodeUpdate = node.transition()
        .attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; });

    // node exit
    var nodeExit = node.exit().transition();

    nodeExit.select("circle")
      .attr("r", 1e-6);

    nodeExit.select("text")
      .style("fill-opacity", 1e-6);

    nodeExit.remove();
  }

});
