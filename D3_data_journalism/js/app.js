// @TODO: YOUR CODE HERE!
var svgWidth = 900;
var svgHeight = 500;

var margin = {top: 20, right: 40, bottom: 80, left: 100};

var width = svgWidth - margin.left - margin.right;
var height = svgHeight - margin.top - margin.bottom;

var svg = d3
  .select(".chart")
  .append("svg")
  .attr("width", svgWidth)
  .attr("height", svgHeight)
  .append("g")
  .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

var chart = svg.append("g");

d3.select(".chart").append("div").attr("class", "tooltip").style("opacity", 0);

d3.csv("data.csv", function(err, myData){
  if (err) throw err;

  myData.forEach(function(data){
    data.no_internet_access_p = Number(data.no_internet_access_p);
    data.poverty_p = Number(data,poverty_p);
    data.bachelor_p = Number(data, bachelor_p);
  });

  console.log(myData);

  var yLinearScale = d3.scaleLinear().range([height, 0]);

  var xLinearScale = d3.scaleLinear().range([0, width]);

  var bottomAxis = d3.axisBottom(xLinearScale);
  var leftAxis = d3.axisLeft(yLinearScale);

  var xMin;
  var xMax;
  var yMax;

  function findMinAndMax(dataColumnX) {
    xMin = d3.min(myData, function(data) {
      return Number(data[dataColumnX]) *1.1;
    });

    xMax = d3.max(myData, function(data) {

    })
  }
})
