google.charts.load("current", {packages: ["corechart"]});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  let chartHTML = "<table><tr>";
  chartDataCollection.forEach(function(test) {
    chartHTML += `<td><div id="${test[0][1]}"></div></td>`;
  });
  chartHTML += "</tr></table>"
  document.body.innerHTML += chartHTML;
  chartDataCollection.forEach(function(test) {
    var data = google.visualization.arrayToDataTable(
      test
    );

    var options = {
      title: `Timing '${test[0][1]}'`,
      legend: "none",
      vAxis: { title: "Mean execution time (ms)" },
      hAxis: { title: "Number of entries in array" },
      width: 650,
      height: 600
    };

    var chart = new google.visualization.ScatterChart(document.getElementById(`${test[0][1]}`));
    chart.draw(data, options);
  });
}
