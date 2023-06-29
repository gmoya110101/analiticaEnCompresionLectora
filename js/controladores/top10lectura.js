anychart.onDocumentReady(() => {
  // create data set on our data
  anychart.data.loadJsonFile(
    'https://api.npoint.io/fcd6767da78ee0d2aa2d',

    (data) => {

      var dataSet = anychart.data.set(data);

      // map data for the first series, take x from the zero column and value from the first column of data set
      var firstSeriesData = dataSet.mapAs({ x: 0, value: 1 });

      // map data for the second series, take x from the zero column and value from the second column of data set
      var secondSeriesData = dataSet.mapAs({ x: 0, value: 2 });

      // map data for the third series, take x from the zero column and value from the third column of data set
      var thirdSeriesData = dataSet.mapAs({ x: 0, value: 3 });

      // map data for the fourth series, take x from the zero column and value from the fourth column of data set
      var fourthSeriesData = dataSet.mapAs({ x: 0, value: 4 });

      // map data for the fourth series, take x from the zero column and value from the fourth column of data set
      var fifthSeriesData = dataSet.mapAs({ x: 0, value: 5 });


      // create bar chart
      var chart = anychart.bar();

      // turn on chart animation
      chart.animation(true);

      chart.padding([10, 40, 5, 20]);

      // set chart title text settings
      chart.title('Top 10 lectura');

      // set scale minimum
      chart.yScale().minimum(0);

      // force chart to stack values by Y scale.
      chart.yScale().stackMode('value');
      chart.yAxis().labels().format('{%Value}{groupsSeparator: }');

      // set titles for axises
      chart.xAxis().title('Alumno');
      chart.yAxis().title('Calificaciones');

      // helper function to setup label settings for all series
      var setupSeries = (series, name) => {
        series.name(name);
        series.stroke('3 #fff 1');
        series.hovered().stroke('3 #fff 1');
      };

      // temp variable to store series instance
      var series;

      // create first series with mapped data
      series = chart.bar(firstSeriesData);
      setupSeries(series, 'Decodificación');

      // create second series with mapped data
      series = chart.bar(secondSeriesData);
      setupSeries(series, 'Reconocimiento de palabras');

      // create third series with mapped data
      series = chart.bar(thirdSeriesData);
      setupSeries(series, 'Fluidez');

      // create fourth series with mapped data
      series = chart.bar(fourthSeriesData);
      setupSeries(series, 'Ciencia fonológica');
      // create five series with mapped data
      series = chart.bar(fifthSeriesData);
      setupSeries(series, 'Conocimientos sobre el lenguaje escrito');
  


      // turn on legend
      chart.legend().enabled(true).fontSize(13).padding([0, 0, 20, 0]);

      chart.interactivity().hoverMode('by-x');
      chart.tooltip().valuePrefix(' ').displayMode('union');

      // set container id for the chart
      chart.container('top10barraslectura');
      // initiate chart drawing
      chart.draw();
    }
  );
});