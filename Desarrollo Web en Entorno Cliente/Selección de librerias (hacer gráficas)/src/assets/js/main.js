const obtenDatos = (elemento) => {
    let ArrayFinal = [];
    let aux = '';
    texto = elemento.value;

    texto += ',';
    for (let index = 0; index < texto.length; index++) {
        if (texto[index] == ',' || (index == texto.length - 1)) {
            ArrayFinal.push(parseInt(aux, 10));
            aux = '';
        } else if (texto[index] != ' ') {
            aux += texto[index];
        }
    }
    return ArrayFinal;
}

const btnGraficoPulsado = (primerClick => {

    /*datasetTemp = {
        label: 'Temperaturas (ºC)',
        data: obtenDatos(document.getElementById('temperaturas')),
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1
    }

    datasetLluvias = {
        label: 'Lluvias (mm3)',
        data: obtenDatos(document.getElementById('lluvias')),
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1
    }*/
    // chart.labels = obtenDatos(document.getElementById('meses'));
    //chart.data.datasets.push(datasetTemp);
    //chart.data.dadatasets.push(datasetLluvias);
    /* else {
        chart.labels = obtenDatos(document.getElementById('meses'));
        chart.data.datasets[0].data = obtenDatos(document.getElementById('temperaturas'));
        chart.data.datasets[1].data = obtenDatos(document.getElementById('lluvias'));
        chart.update();
    }*/
});

document.addEventListener("DOMContentLoaded", () => {
    const btnGrafico = document.getElementById("btnGrafico");
    let primerClick = true;
    btnGrafico.addEventListener("click", () => {
        const meses = obtenDatos(document.getElementById('meses'));
        const temperaturas = obtenDatos(document.getElementById('temperaturas'));
        const lluvias = obtenDatos(document.getElementById('lluvias'));

        let chart = new Chart(document.getElementById('grafico').getContext('2d'), {
            type: 'line',
            data: {
                labels: meses,
                datasets: [{
                    label: 'Temperaturas (ºC)',
                    data: temperaturas,
                    backgroundColor: 'rgba(54, 162, 235, 0.2)',
                    borderColor: 'rgba(54, 162, 235, 1)',
                    borderWidth: 1,
                },
                {
                    label: 'Lluvias (mm3)',
                    data: lluvias,
                    backgroundColor: 'rgba(255, 99, 132, 0.2)',
                    borderColor: 'rgba(255, 99, 132, 1)',
                    borderWidth: 1
                }],
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }
        });
        if (primerClick) {
            btnGrafico.value = 'actualizar gráfica';
            document.getElementById('grafico').style.display = 'block';
        }
    })
});