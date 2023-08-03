anychart.onDocumentReady(function () {

  anychart.data.loadJsonFile(
    'https://api.npoint.io/2543e4298e748b473001',
     (data) => {
// Crear formato de datos e inserción de los datos del JSON
  var chartData = {
    title: 'Grades of the language comprehension section ',
    header: ['#', 'Alan Velasco ', 'Gerardo Moya', 'Leslie Rojas'],
    rows: getData(data)
  };

  // Crea el gráfico de área
  var chart = anychart.area3d();

  // Inserta los datos al gráfico
  chart.data(chartData)

  // Interactividad y tooltip
  chart.interactivity().hoverMode('by-x');
  chart.tooltip().displayMode('union');
  

  chart.yAxis().title('Time');
  chart.yAxis().labels().format('{%Value} seconds');

  // Habilita las etiquetas
  chart.legend().enabled(true).fontSize(13).padding([0, 0, 20, 0]);

  // Características del gráfico en  3D
  chart.zAspect('35%').zPadding(0).zAngle(20);

  // Contenedor HTML
  chart.container('area');

  // Inicializa el gráfico
  chart.draw();
}
  );
});


function getData(data) {
  return data;
}