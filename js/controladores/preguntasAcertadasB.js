anychart.onDocumentReady(function () {
    // Creación de un gráfico de barras3D
    anychart.data.loadJsonFile(
      'https://api.npoint.io/46a18eddc26f14a189df',
      (data)=>{

        chart = anychart.bar();

// create a bar series and set the data
var series = chart.bar(data);
series.name('Resultado');

// set the container id
chart.container("barrasHorizontal");

// initiate drawing the chart
chart.draw();
      }
    )});