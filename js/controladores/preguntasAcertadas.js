anychart.onDocumentReady(function () {

  anychart.data.loadJsonFile(
    'https://api.npoint.io/b64b88fa6bb0b974ead5',
     (data) => {
  // Crear formato de datos e inserción de los datos del JSON
  var chartData = {
    title: 'Tiempo promedio de la sección de lectura',
    header: ['#', 'Alan Velasco ', 'Gerardo Moya', 'Leslie Rojas'],
    rows: getData(data)
  };

  // Crea el gráfico
  var chart = anychart.area3d();

  // Inserta los datos
  chart.data(chartData);

  // Interactividad y tooltip
  chart.interactivity().hoverMode('by-x');
  chart.tooltip().displayMode('union');
  

  chart.yAxis().title('Rango');
  chart.yAxis().labels().format('{%Value} segundos');

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