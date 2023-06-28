let persona = {
    nombre: "Juan",
    apellidos: "Pérez",
    edad: 30,
    direccion: "Calle Principal 123",
    ciudad: "Ciudad Ejemplo",
    pais: "País Ejemplo"
};

function mostrarNombreCompleto(persona) {
    var nombreCompleto = persona.nombre + " " + persona.apellidos;
    console.log("Nombre completo:", nombreCompleto);
}

mostrarNombreCompleto(persona);