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

document.addEventListener("DOMContentLoaded", () => {
    const btnGrafico = document.getElementById("btnGrafico");
    const btnTipo = document.getElementById("btnTipo");
    const canvasGraficoLinea = document.getElementById('graficoLinea');
    const canvasGraficoBarra = document.getElementById('graficoBarra');
    let primerClick = true;
    let muestraGraficoLinea = true;

    let chartLinea = new Chart(canvasGraficoLinea.getContext('2d'), {
        type: 'line',
        data: {
            labels: [],
            datasets: [{
                label: 'Temperaturas (ºC)',
                data: [],
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1,
            },
            {
                label: 'Lluvias (mm3)',
                data: [],
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

    let chartBarra = new Chart(canvasGraficoBarra.getContext('2d'), {
        type: 'bar',
        data: {
            labels: [],
            datasets: [{
                label: 'Temperaturas (ºC)',
                data: [],
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1,
            },
            {
                label: 'Lluvias (mm3)',
                data: [],
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


    btnGrafico.addEventListener("click", () => {
        const meses = obtenDatos(document.getElementById('meses'));
        const temperaturas = obtenDatos(document.getElementById('temperaturas'));
        const lluvias = obtenDatos(document.getElementById('lluvias'));

        if (meses.length == temperaturas.length && meses.length == lluvias.length) {

            chartLinea.data.labels = meses;
            chartLinea.data.datasets[0].data = temperaturas;
            chartLinea.data.datasets[1].data = lluvias;

            chartBarra.data.labels = meses;
            chartBarra.data.datasets[0].data = temperaturas;
            chartBarra.data.datasets[1].data = lluvias;

            if (primerClick) {
                btnGrafico.value = 'Actualizar gráfica';
                canvasGraficoLinea.style.display = 'block';
                btnTipo.style.display = 'block';
                primerClick = false;
            }
            chartLinea.update();
            chartBarra.update();
        } else {
            alert('Los campos deben tener el mismo número de elementos');
        }
    })

    btnTipo.addEventListener("click", () => {
        if (muestraGraficoLinea) {
            canvasGraficoLinea.style.display = 'none';
            canvasGraficoBarra.style.display = 'block';
            btnTipo.value = 'Cambiar a gráfica en linea';
            muestraGraficoLinea = false;
        } else {
            canvasGraficoLinea.style.display = 'block';
            canvasGraficoBarra.style.display = 'none';
            btnTipo.value = 'Cambiar a gráfica de barras';
            muestraGraficoLinea = true;
        }
    })
});
