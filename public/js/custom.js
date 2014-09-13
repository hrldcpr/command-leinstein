$(function() {

  var width = 1000,
      height = 1000;

  var cluster = d3.layout.cluster()
      .size([height, width - 200]);

var diagonal = d3.svg.diagonal()
  // Flip the values here.
  .projection(function(d) { return [d.x, d.y]; });

  var svg = d3.select("body").append("svg")
      .attr("width", width)
      .attr("height", height)
    .append("g")
      .attr("transform", "translate(0,40)");

  d3.json("./public/js/test.json", function(error, root) {
    var nodes = cluster.nodes(root),
        links = cluster.links(nodes);

    var link = svg.selectAll(".link")
        .data(links)
      .enter().append("path")
        .attr("class", "link")
        .attr("d", diagonal);

    var node = svg.selectAll(".node")
        .data(nodes)
      .enter().append("g")
        .attr("class", "node")
        .attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; })

    node.append("circle")
        .attr("r", 4.5);

    node.append("text")
        .attr("dx", 2)
        .attr("dy", function(d) { return d.children ? -8 : 8; })
        .style("text-anchor", function(d) { return d.children ? "end" : "start"; })
        .text(function(d) { return d.name; });
  });

  d3.select(self.frameElement).style("height", height + "px");

});
