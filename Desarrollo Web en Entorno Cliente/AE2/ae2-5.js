function multipleFactorial(values) {
    return values.map((valor) => {
        let res=valor;
        for (let i = 1; i <= valor; i++) 
        {
            res = res * i;
        }
        return res;
    })
}
console.log(multipleFactorial([1,2,3,4,5,6,7,8,9]));