anychart.onDocumentReady( () => {

    anychart.data.loadJsonFile(
        'https://api.npoint.io/a3cf843195af7508ac89',
         (data) => {

            // Crea el gráfico de pastel
            var chart = anychart.pie(data);
            //Animación de inicio
            chart.animation(true);
            // Animación que saca la rebanada del gráfico cuando se pasa el mouse encima
            chart.selected().explode("5%");
            chart.hovered().explode("5%");

            //Formato de etiquetas
            var tooltip = chart.tooltip();
            tooltip.title().text("Aprobados");
            tooltip.format("Género: {%x}\nTotal aprobados: {%value}");

            // Título del gráfico
            chart.title("Estudiantes aprobados")
                .radius('90%');;

            // // Id del div
            chart.container('pastel');

            // Dibuja el gráfico
            chart.draw();

        }
    );
});





