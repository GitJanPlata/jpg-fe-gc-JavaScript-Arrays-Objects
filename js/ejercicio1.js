let miArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];

function obtenerLongitudArray(arr) {
    console.log("Longitud del array:", arr.length);
}

function obtenerElementoAleatorio(arr) {
    let indiceAleatorio = Math.floor(Math.random() * arr.length);
    let elementoAleatorio = arr[indiceAleatorio];
    console.log("Elemento aleatorio:", elementoAleatorio);
}

obtenerLongitudArray(miArray);
obtenerElementoAleatorio(miArray);