
anychart.onDocumentReady(function () {
  // Creación de un gráfico de barras3D
  anychart.data.loadJsonFile(
    'https://api.npoint.io/59f92fabc5e064ed273f',
    (data)=>{

      chart = anychart.bar();

// Crea el gráfico de barras y le inserta los datos
var series = chart.bar(data);
series.name('Result');

  // Contenedor HTML
chart.container("barrasHorizontal");

// Inicializa el gráfico
chart.draw();
    }
  )});