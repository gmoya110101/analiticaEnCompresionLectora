anychart.onDocumentReady(function () {

    anychart.data.loadJsonFile(
        'https://api.npoint.io/cf80800a71d5000cf3e0',
        function (data) {
            var dataSet = anychart.data.set(data);
            // Poner el tipo de gráfico
            var chart = anychart.heatMap(data);
            //Titulo
           // chart.title("Estudiantes aprobados en la sección de lectura de palabras");
            // Creación de la escala de colores
            var colorScale = anychart.scales.ordinalColor();
            // Parámetros de los rangos
            colorScale.ranges([
                // Color de los parámetros
                { less: 20, color: "#FF4500" },
                { from: 21, to: 40, color: "#FFA500" },
                { from: 41, to: 60, color: "#FFFF00" },
                { from: 61, to: 80, color: "#9ACD32" },
                { greater: 81, color: "#008000" }
            ]);

            //Formato de etiquetas
            var tooltip = chart.tooltip();
            tooltip.title().text("Aprobados");
            tooltip.format("Género: {%x}\nTotal aprobados: {%heat}");

            // Se aplica la escala
            chart.colorScale(colorScale);

            var xLabels = chart.xAxis().labels();
            xLabels.fontSize(10);

            // dibuja el gráfico
            chart.container("heatmap");
            chart.draw();
        })
});