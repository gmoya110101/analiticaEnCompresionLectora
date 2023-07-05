
anychart.onDocumentReady(function () {
  // Creación de un gráfico de barras3D
  anychart.data.loadJsonFile(
    'https://api.npoint.io/59f92fabc5e064ed273f',
    (data)=>{

      chart = anychart.bar();

// create a bar series and set the data
var series = chart.bar(data);
series.name('Result');

// set the container id
chart.container("barrasHorizontal");

// initiate drawing the chart
chart.draw();
    }
  )});