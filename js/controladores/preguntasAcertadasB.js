anychart.onDocumentReady(function () {
    // Creación de un gráfico de barras3D
    anychart.data.loadJsonFile(
      'https://api.npoint.io/46a18eddc26f14a189df',
      (data)=>{

        chart = anychart.bar();

    // Crea la varibale series donde se le asigana el gráfico 
    var series = chart.bar(data);
    series.name('Resultado');

    // Contenedor
    chart.container("barrasHorizontal");

    // Inicializa el gráfico
    chart.draw();
          }
        )});