anychart.onDocumentReady(function () {
    // Creación de un gráfico de área
    anychart.data.loadJsonFile(
      'https://api.npoint.io/8ebc6b02226c085f6bfd',
      (data)=>{
       
        const chart = anychart.column3d(data);
        
      chart.title('Word Reading Section Grades');
  
        chart.animation(true);
        //Título y formato del eje Y
        chart.yAxis().title('Grade');
        chart.yAxis().labels().format('{%Value}{groupsSeparator: }');
  
        //Formato de las etiquetas
        chart
      .labels()
      .enabled(true)
      .fontColor('#60727b')
      .position('center-top')
      .anchor('center-bottom')
      .format('{%Value}{groupsSeparator: }');
    chart.hovered().labels(false);
  
  
    // Opciones de interactividad
    chart.interactivity().hoverMode('single');
  
    // Tooltip
    chart
      .tooltip()
      .positionMode('point')
      .position('center-top')
      .anchor('center-bottom')
      .offsetX(0)
      .offsetY(5)
      .format('Grade: {%Value}{groupsSeparator: }');
  
    // contenedor
    chart.container('barra3D');
  
    // Dibuja el gráfico
    chart.draw();
      }
    );
  });