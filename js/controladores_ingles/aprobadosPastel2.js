anychart.onDocumentReady( () => {

    anychart.data.loadJsonFile(
        'https://api.npoint.io/43591752f87787506e05',
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
            tooltip.title().text("Approved");
            tooltip.format("Gender: {%x}\nTotal approved: {%value}");

            // Título del gráfico
            chart.title("Students approved by gender");
            chart.radius('90%');

            // // Id del div
            chart.container('pastel');

            // Dibuja el gráfico
            chart.draw();

        }
    );
});





