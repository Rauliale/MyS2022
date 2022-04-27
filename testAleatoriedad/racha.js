function racha(array){

    var aux = 0 ; //esta variable es para sumar los valores
    for (let i = 0; i < array.length; i++) {
        aux += parseInt(array[i]) ;
    }

    var media = 0.0 ;
    media = (aux / parseFloat(array.length)) ;
    var n1 = 0 ; //el valor que esta por encima de la media
    var n2 = 0 ; //es el valor que esta por debajo de la media
    var arrayBinario = [] ;
    for (let i = 0; i < array.length; i++) {
        if(array[i]>=media){
            n1++ ;
            arrayBinario.push(1) ;
        }else{
            n2++;
            arrayBinario.push(0) ;
        }
    }


    var auxArray = arrayBinario[0] ;
    var cantRachas = 1 ;
    for (let i = 0; i < arrayBinario.length; i++) {
        if(auxArray != arrayBinario[i]){
            cantRachas++;
            auxArray = arrayBinario[i] ;
        }   
    }

    //retornaremos un array que contendra n1, n2 y la cantidad de rachas.
    return [n1,n2,cantRachas] ;


}