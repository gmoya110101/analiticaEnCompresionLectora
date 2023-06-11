anychart.onDocumentReady(function () {
  // create data set on our data
  var chartData = {
    title: 'Company Profit Dynamic in Regions by Year',
    header: ['#', 'Florida', 'Texas', 'Nevada'],
    rows: getData()
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

  chart.yAxis().title('Profit in Dollars');
  chart.yAxis().labels().format('{%Value}k');

  // turn on legend
  chart.legend().enabled(true).fontSize(13).padding([0, 0, 20, 0]);

  // set 3D settings
  chart.zAspect('70%').zPadding(0).zAngle(45);

  // set container id for the chart
  chart.container('preguntasAcertadas');

  // initiate chart drawing
  chart.draw();
});

function getData() {
  return [
    ['1996', 300, 242, 162],
    ['1997', 300, 254, 90],
    ['1998', 330, 226, 50],
    ['1999', 342, 232, 77],
    ['2000', 348, 268, 35],
    ['2001', 334, 254, 45],
    ['2002', 325, 235, 88],
    ['2003', 316, 266, 120],
    ['2004', 318, 288, 156],
    ['2005', 330, 220, 123],
    ['2006', 355, 215, 88],
    ['2007', 366, 236, 66],
    ['2008', 337, 247, 45],
    ['2009', 352, 172, 29],
    ['2010', 377, 137, 45],
    ['2011', 383, 123, 88],
    ['2012', 344, 134, 102],
    ['2013', 366, 146, 46],
    ['2014', 389, 159, 69],
    ['2015', 334, 104, 84]
  ];
}