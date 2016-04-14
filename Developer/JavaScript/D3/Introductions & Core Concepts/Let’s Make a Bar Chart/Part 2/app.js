//chart-by-data
var data = [4, 8, 54, 16, 26, 42];

var width = 420,
    barHeight = 20;

var x = d3.scale.linear()
    .domain([0, d3.max(data)])
    .range([0, width]);

var chart = d3.select(".chart-by-data")
    .attr("width", width)
    .attr("height", barHeight * data.length);

var bar = chart.selectAll("g")
    .data(data)
    .enter().append("g")
    .attr("transform", function (d, i) {
        return "translate(0," + i * barHeight + ")";
    });

bar.append("rect")
.attr("width", x)
.attr("height", barHeight - 1);

bar.append("text")
.attr("x", function (d) {
    return x(d) - 3;
})
.attr("y", barHeight / 2)
.attr("dy", ".35em")
.text(function (d) {
    return d;
});

//chart-by-tsv
var xTsv = d3.scale.linear()
    .range([0, width]);

var chartTsv = d3.select(".chart-by-tsv")
    .attr("width", width);

d3.tsv("data.tsv", type, function (error, dataTsv) {
    xTsv.domain([0, d3.max(dataTsv, function (d) {
        return d.value;
    })]);

    chartTsv.attr("height", barHeight * dataTsv.length);

    var barTsv = chartTsv.selectAll("g")
        .data(dataTsv)
        .enter().append("g")
        .attr("transform", function (d, i) {
            return "translate(0," + i * barHeight + ")";
        });

    barTsv.append("rect")
        .attr("width", function(d) { return xTsv(d.value); })
        .attr("height", barHeight - 1);

    barTsv.append("text")
        .attr("x", function (d) {
            return xTsv(d.value) - 3;
        })
        .attr("y", barHeight / 2)
        .attr("dy", ".35em")
        .text(function (d) {
            return d.value;
        });
});

function type(d) {
    d.value = +d.value;
    return d;
}