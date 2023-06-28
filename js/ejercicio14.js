let receta1 = {
    nombre: "Pastel de Chocolate",
    tiempoPreparacion: "1 hora",
    ingredientes: ["harina", "azúcar", "huevos", "chocolate", "mantequilla"]
};

let receta2 = {
    nombre: "Galletas de Avena",
    tiempoPreparacion: "30 minutos",
    ingredientes: ["avena", "azúcar", "mantequilla", "harina", "huevo"]
};

let receta3 = {
    nombre: "Tarta de Manzana",
    tiempoPreparacion: "1 hora y 15 minutos",
    ingredientes: ["manzanas", "harina", "azúcar", "mantequilla", "canela"]
};

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