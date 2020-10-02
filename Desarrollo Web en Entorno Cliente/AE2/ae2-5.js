const multipleFactorial = values => values.map(calculaFactorial);

const calculaFactorial = num => {
    let res = num;
    for (let i = 1; i <= num; i++) {
        res *= i;
    }
    return res;
}
console.log(multipleFactorial([1, 2, 3, 4, 5, 6, 7, 8, 9]));