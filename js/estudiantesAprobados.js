anychart.onDocumentReady(function () {
    // create timeline chart
    var chart = anychart.timeline();

    // create range series
    var rangeSeries = chart.range(rangeData());

    // set range series labels settings
    rangeSeries
      .labels()
      .useHtml(true)
      .fontColor('#fff')
      .format(
        '{%name}<br><span style="font-size: 85%">{%start}{dateTimeFormat:MM/dd} - {%end}{dateTimeFormat:MM/dd}</span>'
      );

    // set range series bar height
    rangeSeries.height(50);

    // create moment series
    chart.moment(eventsData());

    // create line marker and set it's value and stroke settings
    chart.lineMarker().value('2019/03/29').stroke('2 #ff0000');

    // set container id for the chart
    chart.container('container');
    // initiate chart drawing
    chart.draw();
  });

  // range series data
  function rangeData() {
    return [
      {
        name: 'Planning',
        start: '2019/01/22',
        end: '2019/02/04',
        fill: '#01b53f',
        stroke: '#01b53f'
      },
      {
        name: 'Research',
        start: '2019/02/04',
        end: '2019/02/18',
        fill: '#1c4598',
        stroke: '#1c4598'
      },
      {
        name: 'Development',
        start: '2019/02/18',
        end: '2019/03/22',
        fill: '#ff6600',
        stroke: '#ff6600'
      },
      {
        name: 'Implementation',
        start: '2019/03/22',
        end: '2019/04/05',
        fill: '#00a8e0',
        stroke: '#00a8e0'
      },
      {
        name: 'Surveillance',
        start: '2019/04/05',
        end: '2019/04/19',
        fill: '#f6bc16',
        stroke: '#f6bc16'
      },
      {
        name: 'Follow-Up',
        start: '2019/04/19',
        end: '2019/05/01',
        fill: '#e51a23',
        stroke: '#e51a23'
      }
    ];
  }

  // event series data
  function eventsData() {
    return [
      ['2019/01/25', 'Initial approval'],
      ['2019/02/15', 'Final approval'],
      ['2019/03/09', 'Test 1'],
      ['2019/03/14', 'Test 2'],
      ['2019/03/19', 'Test 3'],
      ['2019/04/08', 'Check A/B Test'],
      ['2019/04/26', 'Customer Survey']
    ];
  }