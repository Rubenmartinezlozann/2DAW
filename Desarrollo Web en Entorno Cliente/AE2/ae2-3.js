function findMinimum(values){
    return values.reduce(valor1,valor2=>{
        if (valor1>valor2) {
            return valor2;
        }else{
            return valor1;
        }
    });
}
console.log(findMinimum([3,6,1,5,2,4,11,4,9]));