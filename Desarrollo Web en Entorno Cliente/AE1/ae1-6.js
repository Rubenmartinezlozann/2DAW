function PideNumero(){
    let numero = prompt("Escribe un número");
    return numero
}

function EsPar(numero){
    if (numero % 2 == 0) {
        return "Es un número par";
    }else{
        return "Es un número impar";
    }
}
alert(EsPar(PideNumero()));