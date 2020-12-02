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
    const meses = obtenDatos(document.getElementById('meses'));
    const temperaturas = obtenDatos(document.getElementById('temperaturas'));
    const lluvias = obtenDatos(document.getElementById('lluvias'));
    const btnGrafico = document.getElementById("btnGrafico");
    

    let grafico = new Chart(document.getElementById('grafico').getContext('2d'), {
        type: 'line',
        data: {
            labels: meses,
            datasets: [{
                label: 'Temperaturas (ºC)',
                data: temperaturas,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            },
            {
                label: 'Lluvias',
                data: lluvias,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }
            ]
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

    btnGrafico.addEventListener("click", ()=>{
        document.getElementById('grafico').style.display = 'block';
    })
});
