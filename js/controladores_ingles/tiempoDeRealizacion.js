anychart.onDocumentReady(function () {

  anychart.data.loadJsonFile(//Obtiene el JSON
      'https://api.npoint.io/74cda11e8e8ae42c525e',
      function (data) {

          // Crea el gráfico de línea del tiempo
          var chart = anychart.timeline();

         // chart.title('Realization time');

          // Carga los datos
          var rangeSeries = chart.range(data);

          // Configuración de los datos
          rangeSeries
              .labels()
              .useHtml(true)
              .fontColor('#fff')
              .format(
                  '{%name}<br><span style="font-size: 85%">{%start}{dateTimeFormat:MM/dd} - {%end}{dateTimeFormat:MM/dd}</span>'
              );

          // Alto de los segmentos
          rangeSeries.height(70);

          // Se agregan los eventos
          chart.moment(eventsData());

          // Línea del referencia
          chart.lineMarker().value('2022/12/31').stroke('2 #ff0000');

          // Obtenemos el div contenedor
          chart.container('lineadeltiempo');
          // Se dibuja la gráfica
          chart.draw();


      })
});


// Función de los eventos 
function eventsData() {
  return [
    ['2023/01/25', 'First evaluación'],
    ['2023/02/15', 'Second evaluación'],
    ['2023/03/09', 'Third evaluación'],
    ['2023/03/14', 'Quarter evaluación'],
    ['2023/03/19', 'Fifth evaluación'],
    ['2023/04/08', 'First evaluación 2° OP'],
    ['2023/04/26', 'Second evaluación 2° OP']
  ];
}