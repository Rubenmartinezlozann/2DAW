let valores=[ "Ana", 2,"Javi", 5, "Roberto", 7,"Vanessa", 10];
//a)
let resultadoA=valores.filter((v=>{return typeof(v) === typeof("");}));
console.log("Resultado del apartado a: " + resultadoA);

//b)
let resultadoB=valores.filter((v=>{return typeof(v) === typeof(1) && v % 2 != 0;}));
console.log("Resultado del apartado b: " + resultadoB);