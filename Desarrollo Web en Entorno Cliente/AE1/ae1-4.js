var numero1 = 5;
var numero2 = 8;

if (numero1 < numero2) {
    console.log("numero1 no es mayor que numero2");
}

if (numero2 >= 0) {
    console.log("numero2 es positivo");
}

if (numero1 =! 0) {//La afirmación del alert se cumple con cualquier número excepto el 0 
    console.log("numero1 es negativo o distinto de 0");
}

if(numero2 - numero1 + 1 < 0){
    console.log("Incrementar en 1 unidad el valor de numero1 no lo hace mayor o igual que numero2")
}