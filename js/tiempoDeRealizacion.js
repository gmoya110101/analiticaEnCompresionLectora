anychart.onDocumentReady(function () {
    // create data set on our data
    var chartData = {
      title: 'Top 3 Products with Region Sales Data',
      header: ['#', 'Florida', 'Texas', 'Arizona', 'Nevada'],
      rows: [
        ['Nail polish', 6814, 3054, 4376, 4229],
        ['Eyebrow pencil', 7012, 5067, 8987, 3932],
        ['Lipstick', 8814, 9054, 4376, 9256]
      ]
    };

    // create column chart
    var chart = anychart.column3d();

    // set chart data
    chart.data(chartData);

    // turn on chart animation
    chart.animation(true);

    // set axes settings
    chart.yAxis().title('Revenue in Dollars');
    chart.yAxis().labels().format('{%Value}{groupsSeparator: }');

    // set labels settings
    chart
      .labels()
      .enabled(true)
      .fontColor('#60727b')
      .position('center-top')
      .anchor('center-bottom')
      .format('${%Value}{groupsSeparator: }');
    chart.hovered().labels(false);

    // turn on legend
    chart.legend().enabled(true).fontSize(13).padding([0, 0, 20, 0]);

    // set interactivity settings
    chart.interactivity().hoverMode('single');

    // set tooltip settings
    chart
      .tooltip()
      .positionMode('point')
      .position('center-top')
      .anchor('center-bottom')
      .offsetX(0)
      .offsetY(5)
      .format('{%SeriesName}: ${%Value}{groupsSeparator: }');

    // set container id for the chart
    chart.container('barra3D2');

    // initiate chart drawing
    chart.draw();
  });