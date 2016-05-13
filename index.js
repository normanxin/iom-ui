var margin = {
    top: 1,
    right: 1,
    bottom: 6,
    left: 1
  },
  width = 960 - margin.left - margin.right,
  height = 500 - margin.top - margin.bottom;

var formatNumber = d3.format(",.0f"),
  format = function(d) {
    return formatNumber(d) + " TWh";
  },
  color = d3.scale.category20();

var svg = d3.select("#chart").append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .append("g")
  .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

var sankey = d3.sankey()
  .nodeWidth(15)
  .nodePadding(10)
  .size([width, height]);

var path = sankey.link();

var energy = {
  "nodes": [{
    "name": "ICA"
  }, {
    "name": "Database"
  }, {
    "name": "Human"
  }, {
    "name": "Agent Model"
  }, {
    "name": "Data Model"
  }, {
    "name": "Tree Model"
  }, {
    "name": "Human Model"
  }, {
    "name": "Decide"
  }
  , {
    "name": "Decison"
  }, {
    "name": "CTR INCREASED, INCREASE GOAL, DECREASE DCPM, ADD SEGMENT"
  }, {
    "name": "CTR INCREASED, UNCHANGED GOAL, INCREASE DCPM, REMOVE SEGMENT"
  }, {
    "name": "CTR UNCHANGED, UNCHANGED GOAL, UNCHANGE DCPM, ADD SEGMENT"
  }, {
    "name": "CTR INCREASED, UNCHANGED GOAL, INCREASE DCPM, REMOVE SEGMENT"
  } 
  ],
  "links": [{
    "source": 0,
    "target": 3,
    "value": 33.33
  }, {
    "source": 1,
    "target": 3,
    "value": 33.33
  }, {
    "source": 2,
    "target": 3,
    "value": 33.33
  }, {
    "source": 0,
    "target": 4,
    "value": 22
  }, {
    "source": 1,
    "target": 4,
    "value": 81.144
  }, {
    "source": 2,
    "target": 4,
    "value": 35
  }, {
    "source": 0,
    "target": 5,
    "value": 35
  } , {
    "source": 1,
    "target": 5,
    "value": 11.606
  }
  , {
    "source": 2,
    "target": 5,
    "value": 63.965
  }, {
    "source": 0,
    "target": 6,
    "value": 75.571
  }, {
    "source": 1,
    "target": 6,
    "value": 10.639
  }, {
    "source": 2,
    "target": 6,
    "value": 22.505
  }, {
    "source": 3,
    "target": 9,
    "value": 46
  }, {
    "source": 4,
    "target": 10,
    "value": 58
  }, {
    "source": 5,
    "target": 11,
    "value": 33
  }, {
    "source": 6,
    "target": 12,
    "value": 17
  } , {
    "source": 7,
    "target": 8,
    "value": 58
  } , {
    "source": 9,
    "target": 7,
    "value": 46
  }, {
    "source": 10,
    "target": 7,
    "value": 58
  }, {
    "source": 11,
    "target": 7,
    "value": 33
  }, {
    "source": 12,
    "target": 7,
    "value": 17
  } , {
    "source": 6,
    "target": 12,
    "value": 7.863
  } /*, {
    "source": 15,
    "target": 21,
    "value": 90.008
  }, {
    "source": 15,
    "target": 22,
    "value": 93.494
  }, {
    "source": 23,
    "target": 24,
    "value": 40.719
  }, {
    "source": 25,
    "target": 24,
    "value": 82.233
  }, {
    "source": 5,
    "target": 13,
    "value": 0.129
  }, {
    "source": 5,
    "target": 3,
    "value": 1.401
  }, {
    "source": 5,
    "target": 26,
    "value": 151.891
  }, {
    "source": 5,
    "target": 19,
    "value": 2.096
  }, {
    "source": 5,
    "target": 12,
    "value": 48.58
  }, {
    "source": 27,
    "target": 15,
    "value": 7.013
  }, {
    "source": 17,
    "target": 28,
    "value": 20.897
  }, {
    "source": 17,
    "target": 3,
    "value": 6.242
  }, {
    "source": 28,
    "target": 18,
    "value": 20.897
  }, {
    "source": 29,
    "target": 15,
    "value": 6.995
  }, {
    "source": 2,
    "target": 12,
    "value": 121.066
  }, {
    "source": 2,
    "target": 30,
    "value": 128.69
  }, {
    "source": 2,
    "target": 18,
    "value": 135.835
  }, {
    "source": 2,
    "target": 31,
    "value": 14.458
  }, {
    "source": 2,
    "target": 32,
    "value": 206.267
  }, {
    "source": 2,
    "target": 19,
    "value": 3.64
  }, {
    "source": 2,
    "target": 33,
    "value": 33.218
  }, {
    "source": 2,
    "target": 20,
    "value": 4.413
  }, {
    "source": 34,
    "target": 1,
    "value": 4.375
  }, {
    "source": 24,
    "target": 5,
    "value": 122.952
  }, {
    "source": 35,
    "target": 26,
    "value": 839.978
  }, {
    "source": 36,
    "target": 37,
    "value": 504.287
  }, {
    "source": 38,
    "target": 37,
    "value": 107.703
  }, {
    "source": 37,
    "target": 2,
    "value": 611.99
  }, {
    "source": 39,
    "target": 4,
    "value": 56.587
  }, {
    "source": 39,
    "target": 1,
    "value": 77.81
  }, {
    "source": 40,
    "target": 14,
    "value": 193.026
  }, {
    "source": 40,
    "target": 13,
    "value": 70.672
  }, {
    "source": 41,
    "target": 15,
    "value": 59.901
  }, {
    "source": 42,
    "target": 14,
    "value": 19.263
  }, {
    "source": 43,
    "target": 42,
    "value": 19.263
  }, {
    "source": 43,
    "target": 41,
    "value": 59.901
  }, {
    "source": 4,
    "target": 19,
    "value": 0.882
  }, {
    "source": 4,
    "target": 26,
    "value": 400.12
  }, {
    "source": 4,
    "target": 12,
    "value": 46.477
  }, {
    "source": 26,
    "target": 15,
    "value": 525.531
  }, {
    "source": 26,
    "target": 3,
    "value": 787.129
  }, {
    "source": 26,
    "target": 11,
    "value": 79.329
  }, {
    "source": 44,
    "target": 15,
    "value": 9.452
  }, {
    "source": 45,
    "target": 1,
    "value": 182.01
  }, {
    "source": 46,
    "target": 15,
    "value": 19.013
  }, {
    "source": 47,
    "target": 15,
    "value": 289.366
  } */
  ]
};

var xmlhttp = new XMLHttpRequest();
var url = "";

xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        var myArr = JSON.parse(xmlhttp.responseText);
        myFunction(myArr);
    }
};
xmlhttp.open("GET", url, true);
xmlhttp.send();

function myFunction(arr) {
    energy = arr;
}

sankey
  .nodes(energy.nodes)
  .links(energy.links)
  .layout(32);

var link = svg.append("g").selectAll(".link")
  .data(energy.links)
  .enter().append("path")
  .attr("class", "link")
  .attr("d", path)
  .style("stroke-width", function(d) {
    return Math.max(1, d.dy);
  })
  .sort(function(a, b) {
    return b.dy - a.dy;
  });

link.append("title")
  .text(function(d) {
    return d.source.name + " → " + d.target.name + "\n" + format(d.value);
  });

var node = svg.append("g").selectAll(".node")
  .data(energy.nodes)
  .enter().append("g")
  .attr("class", "node")
  .attr("transform", function(d) {
    return "translate(" + d.x + "," + d.y + ")";
  });

  // Not currently implemented in v4.0

  // .call(d3.behavior.drag()
  //   .origin(function(d) {
  //     return d;
  //   })
  //   .on("dragstart", function() {
  //     this.parentNode.appendChild(this);
  //   })
  //   .on("drag", dragmove));

node.append("rect")
  .attr("height", function(d) {
    return d.dy;
  })
  .attr("width", sankey.nodeWidth())
  .style("fill", function(d) {
    return d.color = color(d.name.replace(/ .*/, ""));
  })
  .style("stroke", function(d) {
    return d3.rgb(d.color).darker(2);
  })
  .append("title")
  .text(function(d) {
    return d.name + "\n" + format(d.value);
  });

node.append("text")
  .attr("x", -6)
  .attr("y", function(d) {
    return d.dy / 2;
  })
  .attr("dy", ".35em")
  .attr("text-anchor", "end")
  .attr("transform", null)
  .text(function(d) {
    return d.name;
  })
  .filter(function(d) {
    return d.x < width / 2;
  })
  .attr("x", 6 + sankey.nodeWidth())
  .attr("text-anchor", "start");

function dragmove(d) {
  d3.select(this).attr("transform", "translate(" + d.x + "," + (d.y = Math.max(0, Math.min(height - d.dy, d3.event.y))) + ")");
  sankey.relayout();
  link.attr("d", path);
}
