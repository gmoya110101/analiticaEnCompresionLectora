anychart.onDocumentReady(function () {
    // create data set on our data
    var dataSet = anychart.data.set([
      ['Powder', 11861, 10919, 8034, 18012],
      ['Mascara', 11261, 10419, 6134, 18712],
      ['Lip gloss', 22998, 12043, 4572, 4008],
      ['Foundation', 10342, 10119, 5231, 13701],
      ['Eyeliner', 12321, 15067, 3417, 5432],
      ['Eyeshadows', 12998, 12043, 4572, 3308],
      ['Lipstick', 8814, 9054, 4376, 9256],
      ['Rouge', 11624, 7004, 3574, 5221],
      ['Eyebrow pencil', 13012, 5067, 3987, 3932],
      ['Nail polish', 12814, 3054, 4376, 4229]
    ]);

    // map data for the first series, take x from the zero column and value from the first column of data set
    var firstSeriesData = dataSet.mapAs({ x: 0, value: 1 });

    // map data for the second series, take x from the zero column and value from the second column of data set
    var secondSeriesData = dataSet.mapAs({ x: 0, value: 2 });

    // map data for the third series, take x from the zero column and value from the third column of data set
    var thirdSeriesData = dataSet.mapAs({ x: 0, value: 3 });

    // map data for the fourth series, take x from the zero column and value from the fourth column of data set
    var fourthSeriesData = dataSet.mapAs({ x: 0, value: 4 });

    // create bar chart
    var chart = anychart.bar();

    // turn on chart animation
    chart.animation(true);

    chart.padding([10, 40, 5, 20]);

    // set chart title text settings
    chart.title('Top 10 Products by Revenue');

    // set scale minimum
    chart.yScale().minimum(0);

    // force chart to stack values by Y scale.
    chart.yScale().stackMode('value');
    chart.yAxis().labels().format('{%Value}{groupsSeparator: }');

    // set titles for axises
    chart.xAxis().title('Products');
    chart.yAxis().title('Revenue in Dollars');

    // helper function to setup label settings for all series
    var setupSeries = function (series, name) {
      series.name(name);
      series.stroke('3 #fff 1');
      series.hovered().stroke('3 #fff 1');
    };

    // temp variable to store series instance
    var series;

    // create first series with mapped data
    series = chart.bar(firstSeriesData);
    setupSeries(series, 'Florida');

    // create second series with mapped data
    series = chart.bar(secondSeriesData);
    setupSeries(series, 'Texas');

    // create third series with mapped data
    series = chart.bar(thirdSeriesData);
    setupSeries(series, 'Arizona');

    // create fourth series with mapped data
    series = chart.bar(fourthSeriesData);
    setupSeries(series, 'Nevada');

    // turn on legend
    chart.legend().enabled(true).fontSize(13).padding([0, 0, 20, 0]);

    chart.interactivity().hoverMode('by-x');
    chart.tooltip().valuePrefix('$').displayMode('union');

    // set container id for the chart
    chart.container('top10barraslectura');
    // initiate chart drawing
    chart.draw();
  });