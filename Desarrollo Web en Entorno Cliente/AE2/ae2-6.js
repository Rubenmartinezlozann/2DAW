function Listar(users,blackListed){
    return users.filter(nombre=>{
        if(blackListed.some(nombreListaNegra=>{return nombre === nombreListaNegra})){//Si el nombre está en lalista negra devolverá false, si no devolverá true
            return false;
        }else{
            return true;
        }
    });
}
console.log(Listar(["a","b","c","d","e"],["b","e"]));