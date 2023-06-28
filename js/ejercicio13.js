let receta = {
    nombre: "Pastel de Chocolate",
    tiempoPreparacion: "1 hora",
    ingredientes: ["harina", "azúcar", "huevos", "chocolate", "mantequilla"]
};

function mostrarReceta(receta) {
    console.log("Nombre de la receta:", receta.nombre);
    console.log("Tiempo de preparación:", receta.tiempoPreparacion);
    console.log("Ingredientes:");
    receta.ingredientes.forEach(ingrediente => {
    console.log("- " + ingrediente);
    });
}

mostrarReceta(receta);