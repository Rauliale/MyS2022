function separar(array) {
    var arrayString = ""
    for (let index = 0; index < array.length; index++) {
        arrayString += String(array[index]);

    }

    var arrayRetorno = [];
    for (let index = 0; index < arrayString.length; index++) {
        arrayRetorno.push(arrayString[index]);
    }
    return arrayRetorno;
}

function ajustar (array,min,max){
    var arrayRetorno2 = [];
    var aux = 0;
    for (let i = 0; i < array.length; i++) {
        var division = (parseInt(array[i]) / 100);
        var division = (parseFloat(division));

        var diferencia = (parseFloat(max) - parseFloat(min));
        diferencia = parseFloat(diferencia);

        aux = ((division * diferencia) + parseFloat(min));
        arrayRetorno2.push(Math.round(aux));
    }
    return arrayRetorno2;
}