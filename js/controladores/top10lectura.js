anychart.onDocumentReady(() => {
  // create data set on our data
  anychart.data.loadJsonFile(
    'https://api.npoint.io/fcd6767da78ee0d2aa2d',

    (data) => {

      var dataSet = anychart.data.set(data);

       //Intervalos para los datos
      var firstSeriesData = dataSet.mapAs({ x: 0, value: 1 });

      var secondSeriesData = dataSet.mapAs({ x: 0, value: 2 });

      var thirdSeriesData = dataSet.mapAs({ x: 0, value: 3 });

      var fourthSeriesData = dataSet.mapAs({ x: 0, value: 4 });

      var fifthSeriesData = dataSet.mapAs({ x: 0, value: 5 });


      // Inicializa el gráfico
      var chart = anychart.bar();

      chart.padding([10, 40, 5, 20]);

      // Escala mínima del gráfico
      chart.yScale().minimum(0);

      // Forza el gráfico a apilar los valores en el eje Y
      chart.yScale().stackMode('value');
      chart.yAxis().labels().format('{%Value}{groupsSeparator: }');

      // Títulos de los ejes
      chart.xAxis().title('Alumno');
      chart.yAxis().title('Calificaciones');

       // Función auxiliar para asignar los nombres a las etiquetas
      var setupSeries = (series, name) => {
        series.name(name);
        series.stroke('3 #fff 1');
        series.hovered().stroke('3 #fff 1');
      };

       // Varible temporal para almacenar la instancia de las series de datos
      var series;

      // crea los intervalos de datos
      series = chart.bar(firstSeriesData);
      setupSeries(series, 'Decodificación');

      series = chart.bar(secondSeriesData);
      setupSeries(series, 'Reconocimiento de palabras');
    
      series = chart.bar(thirdSeriesData);
      setupSeries(series, 'Fluidez');

      series = chart.bar(fourthSeriesData);
      setupSeries(series, 'Ciencia fonológica');
    
      series = chart.bar(fifthSeriesData);
      setupSeries(series, 'Conocimientos sobre el lenguaje escrito');
  
      // Habilita las leyendas
      chart.legend().enabled(true).fontSize(13).padding([0, 0, 20, 0]);

      chart.interactivity().hoverMode('by-x');
      chart.tooltip().valuePrefix(' ').displayMode('union');

      // Contenedor HTML
      chart.container('top10barraslectura');
      // Inicializa el gráfico
      chart.draw();
    }
  );
});