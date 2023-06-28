let javascript1 = ["DOM", "BOM", "Funciones", "Arrays"];
let javascript2 = ["Objetos", "Arrays", "ParseInt"];

encontrarElementoRepetido(array1, array2);

function encontrarElementoRepetido(array1, array2) {
    var elementosRepetidos = [];

    for (var i = 0; i < array1.length; i++) {
    if (array2.includes(array1[i])) {
        if (!elementosRepetidos.includes(array1[i])) {
        elementosRepetidos.push(array1[i]);
        }
    }
    }

    if (elementosRepetidos.length > 0) {
    console.log("Elemento(s) repetido(s):", elementosRepetidos);
    } else {
    console.log("No se encontraron elementos repetidos.");
    }
}


