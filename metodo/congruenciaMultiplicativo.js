function obtenerValoresCM() {

let s = document.getElementById('s').value;
let n = document.getElementById('n').value;
let a = document.getElementById('a').value;
let m = document.getElementById('m').value;
congmulti(s, n,a,m)
}



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
