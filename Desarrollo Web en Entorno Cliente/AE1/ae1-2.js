//A)
let meses = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto,","Septiembre","Octubre","Noviembre","Diciembre"];
let texto = "";
meses.forEach(element => {
	texto+=element + "\n";
});
console.log(texto);

//B)
console.table(meses);