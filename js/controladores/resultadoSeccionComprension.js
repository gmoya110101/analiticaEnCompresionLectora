//Cambiar el nombre
anychart.onDocumentReady(function () {
    // Creación de un gráfico de área
    anychart.data.loadJsonFile(
      'https://api.npoint.io/dc0ad1df68a0adf787c0',
      (data)=>{
       
        const chart = anychart.column3d(data);
        
      chart.title('Resultado de la sección de comprensión del lenguaje');
  
        chart.animation(true);
        //Título y formato del eje Y
        chart.yAxis().title('Calificaciones');
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
      .format('calificación: {%Value}{groupsSeparator: }');
  
    // contenedor
    chart.container('barra3D2');
  
    // Dibuja el gráfico
    chart.draw();
      }
    );
  });