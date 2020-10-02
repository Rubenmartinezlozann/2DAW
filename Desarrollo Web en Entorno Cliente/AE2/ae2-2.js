function average(dataArray){
    if (dataArray.length>0) {
        let res = dataArray.reduce(((a, b)=>a + b)/dataArray.length, 0);
        return res;
    }else{
        return undefined;
    }
}
console.log(average([1,2,3,4,5,6,7,8,9,10]));
console.log(average([]));