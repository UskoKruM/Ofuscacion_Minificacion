// Función que recibe 2 valores y retorna la SUMA.
function sumar(n1, n2) {
    return n1 + n2;
}

// Función que recibe 2 valores y retorna la RESTA.
function restar(n1, n2) {
    return n1 - n2;
}

// Función que recibe 2 valores y retorna la MULTIPLICACIÓN.
function multiplicar(n1, n2) {
    return n1 * n2;
}

// Función que recibe 2 valores y retorna la DIVISIÓN.
function dividir(n1, n2) {
    if (parseInt(n2) === 0) {
        return "No se puede dividir entre 0...";
    }
    return n1 / n2;
}

// Función que recibe un arreglo de números y devuelve su promedio.
function obtenerPromedio(listaNumeros) {
    var suma = 0;
    listaNumeros.forEach(function (num) {
        suma += parseInt(num);
    });
    var promedio = (suma / listaNumeros.length);
    return promedio;
}