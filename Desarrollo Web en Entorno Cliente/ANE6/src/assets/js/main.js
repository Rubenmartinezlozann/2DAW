document.addEventListener('DOMContentLoaded', () => {
    if (document.cookie.length === 0) {
        document.getElementById('seccion1').style.display = 'block';
        const btnAceptar = document.getElementById('aceptar');
        btnAceptar.addEventListener('click', () => {
            obtenDatos();
            document.getElementById('seccion1').style.display = 'none';
            document.getElementById('seccion2').style.display = 'block';
            const auxUsu = document.getElementById('nombreUsuario').value;
            const auxcontr = document.getElementById('contrasenya').value;
            document.cookie = 'usuario=' + auxUsu + '; max-age=30; contrasenya=' + auxcontr + '; max-age=30;';
        });
    } else {
        obtenDatos();
    }
})

const obtenDatos = () => {
    const promesaDatos = axios.get('https://jsonplaceholder.typicode.com/users');
    promesaDatos.then(respuesta => {
        document.getElementById('datos').value =  respuesta.data;
    });
}