anychart.onDocumentReady(function () {

    anychart.data.loadJsonFile(
        'https://api.npoint.io/47e81cc7db4b1f25a480',
        function (data) {
            var dataSet = anychart.data.set(data);
            // Poner el tipo de gráfico
            var chart = anychart.heatMap(data);
            //Titulo
            //chart.title("Approved students in the language comprehension section");
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
            tooltip.title().text("Approved");
            tooltip.format("Gender: {%x}\nTotal approved: {%heat}");

            // Se aplica la escala
            chart.colorScale(colorScale);

            var xLabels = chart.xAxis().labels();
            xLabels.fontSize(10);

            // dibuja el gráfico
            chart.container("heatmap2");
            chart.draw();
        })
});