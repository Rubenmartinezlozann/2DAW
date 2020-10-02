const average = dataArray => dataArray.length > 0 ? dataArray.reduce((a, b) => (a + b)) / dataArray.length : undefined;
console.log(average([10, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log(average([]));