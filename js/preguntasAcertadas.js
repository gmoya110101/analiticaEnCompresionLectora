anychart.onDocumentReady(function () {
    // create data set on our data
    var dataSet = anychart.data.set(getData());

    // map data for the first series, take x from the zero area and value from the first area of data set
    var firstSeriesData = dataSet.mapAs({ x: 0, value: 1 });

    // map data for the second series, take x from the zero area and value from the second area of data set
    var secondSeriesData = dataSet.mapAs({ x: 0, value: 2 });

    // map data for the third series, take x from the zero area and value from the third area of data set
    var thirdSeriesData = dataSet.mapAs({ x: 0, value: 3 });

    // map data for the third series, take x from the zero area and value from the third area of data set
    var fourthSeriesData = dataSet.mapAs({ x: 0, value: 4 });

    // create area chart
    var chart = anychart.area();

    // turn on chart animation
    chart.animation(true);

    // turn on the crosshair
    var crosshair = chart.crosshair();
    crosshair.enabled(true).yLabel(false).yStroke(null).xStroke('#fff');

    // set chart title text settings
    chart.title(
      'Company Profit Trends in Census Bureau-designated regions'
    );

    // set interactivity and tooltips settings
    chart.interactivity().hoverMode('by-x');
    chart.tooltip().displayMode('union');

    // set Y axis title
    chart.yAxis(0).title('Profit');

    // set custom formatter for Y axis labels
    chart.yAxis(0).labels().format('{%Value}k.');

    // create additional xAxis to place category labels on top
    chart.xAxis(1).orientation('top');

    // create additional xAxis to place category labels on top
    chart.yAxis(1).orientation('right').labels(false);

    chart.tooltip().format('{%SeriesName}: {%Value}k');

    // helper function to setup label settings for all series
    var setupSeries = function (series, name) {
      series.name(name);
      series.markers().zIndex(100);
      series
        .hovered()
        .markers()
        .enabled(true)
        .type('circle')
        .size(4)
        .stroke('1.5 #fff');
    };

    // temp variable to store series instance
    var series;

    // create first series with mapped data
    series = chart.area(firstSeriesData);
    setupSeries(series, 'Northeast');

    // create second series with mapped data
    series = chart.area(secondSeriesData);
    setupSeries(series, 'Midwest');

    // create third series with mapped data
    series = chart.area(thirdSeriesData);
    setupSeries(series, 'South');

    // create fourth series with mapped data
    series = chart.area(fourthSeriesData);
    setupSeries(series, 'West');

    // turn on legend
    chart.legend().enabled(true).fontSize(13).padding([0, 0, 20, 0]);

    // enable grids
    chart.yGrid().stroke('#ddd');
    chart.xGrid().stroke('#ddd');

    // set container id for the chart
    chart.container('area');

    // initiate chart drawing
    chart.draw();
  });

  function getData() {
    return [
      ['1996', 322, 242, 142, 162],
      ['1997', 324, 254, 154, 90],
      ['1998', 329, 226, 126, 50],
      ['1999', 342, 232, 132, 77],
      ['2000', 348, 268, 168, 35],
      ['2001', 334, 254, 154, -45],
      ['2002', 325, 235, 135, -88],
      ['2003', 316, 266, 166, -120],
      ['2004', 318, 288, 188, -156],
      ['2005', 330, 220, 120, -123],
      ['2006', 355, 215, 115, -88],
      ['2007', 366, 236, 136, -66],
      ['2008', 337, 247, 147, -45],
      ['2009', 352, 172, 72, -29],
      ['2010', 377, 37, 7, -45],
      ['2011', 383, 23, 3, -88],
      ['2012', 344, 34, 4, -132],
      ['2013', 366, 46, 6, -146],
      ['2014', 389, 59, 9, -169],
      ['2015', 334, 44, 4, -184]
    ];
  }