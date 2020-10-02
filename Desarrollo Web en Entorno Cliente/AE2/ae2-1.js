const valores = ["Ana", 2, "Javi", 5, "Roberto", 7, "Vanessa", 10];

//a)
const resultadoA = valores.filter(valor => typeof (valor) === typeof (""));
console.log("Resultado del apartado a: " + resultadoA);

//b)
const resultadoB = valores.filter(valor => typeof (valor) === typeof (1) && valor % 2 != 0);
console.log("Resultado del apartado b: " + resultadoB);