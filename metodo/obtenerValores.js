function obtenerValores() {
    let semilla = document.getElementById('n1').value;
    let n1 = document.getElementById('n2').value;
    $('cardResultadoVon').css({
        display: "block"
    });

    var arregloResultado = von(semilla, n1);

    var arregloResultadoVonNeumanAux = [];
    var row = ''
    $('#tablaVonNeumann tbody').html(row);
  
    $('#glVonNeumann').val('');

    for (let i = 0; i < arregloResultado.length; i++) {
        if (!(isNaN(arregloResultado[i][1]))) {
            arregloResultadoVonNeumanAux.push(arregloResultado[i][1])
        }
        row = '<tr>' +
            '<td>' +
            arregloResultado[i][0] +
            '</td>' +
            '<td class="text-right">' +
            arregloResultado[i][1] +
            '</td>' +
            '</tr>';
        $('#tablaVonNeumann tbody').append(row);
    }

    //console.log(n2);
    

    // von(semilla,n);

    let s = document.getElementById('s').value;
    let n = document.getElementById('n').value;
    let a = document.getElementById('a').value;
    let m = document.getElementById('m').value;
    congmulti(s, n,a,m)
    
}
//#Asumiendo que 0001 al 0999 pueden ser numeros de semilla validos.
function von(semilla, n) {
    console.log("entra");
    var x; //Este es el numero semilla que se va a transformar en los N numeros pseudoaleatorios
    var arregloSucesiones = [];
    //Guardamos la primer semilla
    arregloSucesiones.push(['Sucesión 0', semilla]);
    for (let i = 0; i < n; i++) {

        x = semilla * semilla;
        //Transformamos x a un string para poder obtener los cuatro numeros centrales
        semillaX = String(x);
        //Comprobamos que la potencia tenga 8 digitos, de lo contrario, completamos dicho numero con ceros a la izquiera

        if (semillaX.length < 8) {
            var semillaXAux = "";
            for (let index2 = 0; index2 < (8 - semillaX.length); index2++) {
                semillaXAux += "0";
                }
            semillaX = semillaXAux + semillaX;

        }

        //Declaramos un auxiliar para x para poder tomar los 4 numeros centrales
        var xAux = "";
        for (let index = 2; index < semillaX.length - 2; index++) {
            xAux += semillaX[index];
        }

        //Ahora comprobamos que xAux (nuestro numero siguiente de la sucecion) no contenga dos ceros al final
        if (!(xAux == "0000")) {
            if (xAux[xAux.length - 1] == "0" && xAux[xAux.length - 2] == "0") {
                var auxiliar = "";
                auxiliar = xAux[0] + xAux[1] + "13";
                xAux = auxiliar;
            }
        } else {
            arregloSucesiones.push(['Sucesión ' + (i + 1), 'Si las iteraciones resultantes no llegan a las suceciones solicitadas es porque el metodo decae!'])
            break;
        }

        arregloSucesiones.push(['Sucesión ' + (i + 1), xAux]);

        //Ahora la variable semilla va a tomar el valor de xAux
        semilla = parseInt(xAux);
    }


    //Retornamos el array con todos los numeros pseudoaleatorios calculados
    console.log(arregloSucesiones);
 

    return arregloSucesiones;

};



  function congmulti(s, n,a,m) {    //a tiene que ser calculado a = 20 t p
    let resultado = [];             //donde t es cualquier entero y p es cualquiera                                    
    resultado.push(s.toString());   //de los sig. valores: 3, 11, 13, 19, 21, 27, 29, 37, 53, 59,
    let i = 0;                      //61, 67, 69, 77, 83, 91.
    let v = [];
    while (i < n) {
        v = (a * Number(resultado[i])) % m;
        resultado.push(v.toString());
        i += 1;
    }
    
    $('#cardResultadoCongruencia').css({
        display: "block"
    });
    $('#tablaCongruencia tbody').html('');
    for (let index = 0; index < resultado.length; index++) {
        var row = '<tr>' +
        '<td>' +
         index +
        '</td>' +
        '<td class="text-right">' +
        resultado[index]+
        '</td>' +
        '</tr>';
    $('#tablaCongruencia tbody').append(row);
        
    }


	// return Vpura;
    return resultado;
  }
