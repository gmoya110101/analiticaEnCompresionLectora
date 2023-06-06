anychart.onDocumentReady(function () {
    // The data used in this sample can be obtained from the CDN
    // https://cdn.anychart.com/samples/heat-map-charts/heat-map-with-color-scale/data.json
    anychart.data.loadJsonFile(
      'https://cdn.anychart.com/samples/heat-map-charts/heat-map-with-color-scale/data.json',
      function (data) {
        // Sets data
        var dataSet = anychart.data.set(data);
        var heatMapData = dataSet.mapAs({ x: 0, y: 1, heat: 2 });

        // Creates Heat Map
        var chart = anychart.heatMap(heatMapData);

        // Sets chart title
        chart.title('Server Fans Speed Monitoring (rpm)');

        // Sets selection mode for single selection.
        chart.interactivity().selectionMode('none');
        chart.labelsDisplayMode('drop');

        // Sets range for colorScale
        var colorScale = chart.colorScale();
        // Sets colors for all points
        colorScale.ranges([
          {
            from: 0,
            to: 1300,
            name: 'Low',
            color: '#aee2fb'
          },
          {
            from: 1300,
            to: 2300,
            name: 'Normal',
            color: '#69bce8'
          },
          {
            from: 2300,
            to: 3000,
            name: 'High',
            color: '#3085be'
          }
        ]);
        chart.colorScale(colorScale);

        // Sets labels and maximum FontSize
        chart.labels().enabled(true).maxFontSize(14);

        // Sets chart settings and hover chart settings
        chart.stroke('#fff');
        chart
          .hovered()
          .stroke('6 #fff')
          .fill('#545f69')
          .labels({ fontColor: '#fff' });

        // Sets legend
        chart
          .legend()
          .enabled(true)
          .align('center')
          .position('center-top')
          .itemsLayout('horizontal');

        // Sets Axes TextFormatter
        chart.yAxis().stroke(null);
        chart
          .yAxis()
          .labels()
          .padding([0, 15, 0, 0])
          .format(function () {
            return 'Server ' + this.tickValue;
          });
        chart.xAxis().stroke(null);
        chart
          .xAxis()
          .labels()
          .format(function () {
            return 'Fan ' + this.tickValue;
          });

        // Turns off ticks for axes
        chart.yAxis().ticks(false);
        chart.xAxis().ticks(false);

        // Turns tooltips off
        chart.tooltip(false);

        // set container id for the chart
        chart.container('calor');

        // initiate chart drawing
        chart.draw();
      }
    );
  });

  