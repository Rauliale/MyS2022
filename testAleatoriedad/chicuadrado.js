function chiCuadrado(array) {

    var n = array.length //n es la cantidad de elementos
    var k = 10; //k es la posibilidad de numeros que hay, en este caso, 10 (0-9)
    var pi = n / k; //pi es la probabilidad que tiene cada numero de salir


    var arrayRetorno = [];

    //Retornaremos un array que contendra lo siguiente
    //[  digito(0-9), fi (frecuencia), npi (pi), fi-npi, (chi)^2, (chi)^2 / npi  ]

    for (let i = 0; i < k; i++) {
        var fi = 0;
        //Obtenemos fi
        for (let j = 0; j < array.length; j++) {
            if (array[j] == i) {
                fi++;
            }
        }
        arrayRetorno.push([
            i, fi, pi, (fi - pi), ((fi - pi) ^ 2), (((fi - pi) ^ 2) / pi)
        ]);
        
    }

    return arrayRetorno;

}