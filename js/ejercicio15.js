class Receta {
    constructor(nombre, tiempoPreparacion, ingredientes) {
    this.nombre = nombre;
    this.tiempoPreparacion = tiempoPreparacion;
    this.ingredientes = ingredientes;
    }
}

let receta1 = new Receta(
    "Pastel de Chocolate",
    "1 hora",
    ["harina", "azúcar", "huevos", "chocolate", "mantequilla"]
);

let receta2 = new Receta(
    "Galletas de Avena",
    "30 minutos",
    ["avena", "azúcar", "mantequilla", "harina", "huevo"]
);

let receta3 = new Receta(
    "Tarta de Manzana",
    "1 hora y 15 minutos",
    ["manzanas", "harina", "azúcar", "mantequilla", "canela"]
);

let recetas = [receta1, receta2, receta3];

function mostrarRecetas(recetas) {
    recetas.forEach(receta => {
    console.log("Nombre de la receta:", receta.nombre);
    console.log("Tiempo de preparación:", receta.tiempoPreparacion);
    console.log("Ingredientes:");
    receta.ingredientes.forEach(ingrediente => {
        console.log("- " + ingrediente);
    });
    console.log("----------------------");
    });
}

mostrarRecetas(recetas);