let objetos = [
    { nombre: "Pack Bollicaos", precio: 10, cantidad: 5 },
    { nombre: "pack pantera rosa", precio: 20, cantidad: 3 },
    { nombre: "Pack weikis", precio: 15, cantidad: 8 }
];

function mostrarValorPropiedad(objetos, propiedad) {
    for (let i = 0; i < objetos.length; i++) {
    console.log(objetos[i][propiedad]);
    }
}

mostrarValorPropiedad(objetos, "precio");