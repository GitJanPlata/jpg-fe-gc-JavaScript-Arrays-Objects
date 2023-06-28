function intercalarArrays(arrayUno, arrayDos) {
    var nuevoArray = [];

    for (var i = 0; i < arrayUno.length; i++) {
    nuevoArray.push(arrayUno[i]);
    nuevoArray.push(arrayDos[i]);
    }

    // Vaciar los arrays originales
    arrayUno.length = 0;
    arrayDos.length = 0;

    return nuevoArray;
}

var arrayUno = [1, 2, 3];
var arrayDos = [4, 5, 6];

var resultado = intercalarArrays(arrayUno, arrayDos);

console.log("Resultado:", resultado);
console.log("arrayUno:", arrayUno);
console.log("arrayDos:", arrayDos);
