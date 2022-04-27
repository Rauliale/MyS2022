function separarArrayN(array, n) {
    var arrayString = [];
    for (let index = 0; index < array.length; index++) {
        arrayString.push(String(array[index]));
    }


    var arrayRetorno = [];
    
    for (let i = 0; i < arrayString.length; i+=n) {
        var aux = String('') ;
        if(i+(n-1)<arrayString.length){
            for ( var j = i ; j <= i+(n-1); j++) {
                aux += arrayString[j];
            }
            arrayRetorno.push(parseInt(aux));
        }

    }


    return arrayRetorno;
}