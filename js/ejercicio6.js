function dividirNumerosParesImpares(numeros) {
    let pares = [];
    let impares = [];

    for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 === 0) {
        pares.push(numeros[i]);
    } else {
        impares.push(numeros[i]);
    }
    }

    return pares.concat(impares);
}

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
resultado = dividirNumerosParesImpares(numeros);

console.log("Números Pares e Impares concatenados:", resultado);