function PideNumero(){
    let numero;
    do {
        numero=prompt("Escribe un número entre 1 y 12");
        if (numero > 12 || numero < 1) {
            alert("El numero debe estar entre 1 y 12");
        }
    } while (numero > 12 || numero < 1);
    let aleatorio=Math.round(Math.random() * 12);
    if (numero == aleatorio) {
        alert("¡Enhorabuena, has acertado!");
    }else{
        alert("No has acertado, ¡Vuelve a intentarlo!");
    }
}

PideNumero();