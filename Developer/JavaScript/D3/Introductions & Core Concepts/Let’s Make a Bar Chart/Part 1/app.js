var data = [4, 8, 15, 16, 23, 48];

var div1 = document.createElement("div");
div1.innerHTML = "Hello, world!";
document.body.appendChild(div1);

var body = d3.select("body");
var div2 = body.append("div");
div2.html("Hello, World1!");

/*
var section = d3.selectAll("section");
var div3 = section.append("div");
div3.html("Hello, Section!");
*/

body.style("color", "black");
body.style("background-color", "white");

d3.select("body")
.style("color", "blue")
.style("background-color", "pink");

d3.selectAll("section")
.attr("class", "special")
.append("div")
.html("Hello, Sections!");

var section = d3.selectAll("section");
section.append("div")
    .html("First!");
section.append("div")
    .html("Second.");

d3.select(".chart-by-data")
.selectAll("div")
.data(data)
.enter().append("div")
.style("width", function (d) {
    return d * 10 + "px";
})
.text(function (d) {
    return d;
});

var x = d3.scale.liner()
.domain([0, d3.max(data)])
.range([0, 420]);