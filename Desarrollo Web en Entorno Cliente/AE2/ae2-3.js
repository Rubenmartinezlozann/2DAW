const findMinimum = values => values.reduce((valor1, valor2) => valor1 > valor2 ? valor2 : valor1);
console.log(findMinimum([3, 6, 1, 5, 2, 4, 11, 4, 9]));