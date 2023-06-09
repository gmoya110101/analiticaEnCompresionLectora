anychart.onDocumentReady(function () {

  anychart.data.loadJsonFile(
    'https://api.npoint.io/b64b88fa6bb0b974ead5',
     (data) => {
  // create data set on our data
  var chartData = {
    title: 'Tiempo de Preguntas acertadas',
    header: ['#', 'Alan Velasco ', 'Gerardo Moya', 'Leslie Rojas'],
    rows: getData(data)
  };

  // create area chart
  var chart = anychart.area3d();

  // set chart data
  chart.data(chartData);

  // turn on chart animation
  chart.animation(true);

  // set interactivity and tooltips settings
  chart.interactivity().hoverMode('by-x');
  chart.tooltip().displayMode('union');
  

  chart.yAxis().title('Rango');
  chart.yAxis().labels().format('{%Value} segundos');

  // turn on legend
  chart.legend().enabled(true).fontSize(13).padding([0, 0, 20, 0]);

  // set 3D settings
  chart.zAspect('35%').zPadding(0).zAngle(20);

  // set container id for the chart
  chart.container('area');

  // initiate chart drawing
  chart.draw();
}
  );
});


function getData(data) {
  return data;
}