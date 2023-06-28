let javascript1 = ["DOM", "BOM", "Funciones", "Arrays"];

// Eliminar "DOM" del array
javascript1.splice(javascript1.indexOf("DOM"), 1);

// Añadir "Objetos" en lugar de "DOM"
javascript1.splice(0, 0, "Objetos");

// Eliminar "Arrays" del array
javascript1.splice(javascript1.indexOf("Arrays"), 1);

// Añadir "ArraysDifíciles" en lugar de "Arrays"
javascript1.splice(javascript1.indexOf("Funciones") + 1, 0, "ArraysDifíciles");

// Crear una copia del array con los últimos dos elementos
let ultimosElementos = javascript1.slice(-2);

// Obtener el índice del elemento "Funciones"
let indiceFunciones = javascript1.indexOf("Funciones");

console.log(javascript1);
console.log(ultimosElementos);
console.log("Índice de 'Funciones':", indiceFunciones);