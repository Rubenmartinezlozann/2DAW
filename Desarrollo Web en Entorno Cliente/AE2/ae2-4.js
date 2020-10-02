let findGreaterThan = (x, values) => values.every(valor => valor > x);
console.log(findGreaterThan(1, [2, 3, 4, 1, 0, 9, 66, 365, 23]));
console.log(findGreaterThan(1, [2, 3, 4, 3, 8, 9, 66, 365, 23]));