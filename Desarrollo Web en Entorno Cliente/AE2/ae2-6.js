const Listar = (users, blackListed) => users.filter(nombre => blackListed.some(nombreListaNegra => nombre === nombreListaNegra) ? false : true) 
console.log(Listar(["a", "b", "c", "d", "e"], ["b", "e"]));