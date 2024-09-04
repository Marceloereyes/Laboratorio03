const plus = (a, b) => {
    var suma = a + b;
    return suma;
};

const subtract = (a, b) => {
    var resta = a - b;
    return resta;
};

const multiply = (a, b) => {
    var multiplicacion = a * b;
    return multiplicacion;
};

const split = (a, b) => {
    if (b === 0) {
        return "Es imposible hacer la operación, ya que lo está dividiendo entre 0";
    } else {
        var division = a / b;
        return division;
    }
};

const requestNumber = () => {
    let numero = prompt("Introduce un número:");
    if (numero === null) {
        return null; 
    }
    numero = parseFloat(numero);
    if (isNaN(numero)) {
        alert("Número no válido.");
        return null; 
    }
    return numero;
};

const selectOperation = (a, b) => {
    let opcion = parseInt(prompt("---- Introduce una opción: ----\n1- Sumar\n2- Restar\n3- Multiplicar\n4- Dividir\n5- Salir"));

    let resultado;

    switch (opcion) {
        case 1:
            resultado = plus(a, b);
            break;
        case 2:
            resultado = subtract(a, b);
            break;
        case 3:
            resultado = multiply(a, b);
            break;
        case 4:
            resultado = split(a, b);
            break;
        case 5:
            return "Adiós :(. Vuelve pronto!!!";
        default:
            alert("Opción no válida. Inténtelo de nuevo :)");
            return null;
    }

    return resultado;
};

const main = () => {
    let m = requestNumber();
    if (m === null) return;

    let r = requestNumber();
    if (r === null) return;

    let resultado = selectOperation(m, r);
    if (resultado === "Adiós :(. Vuelve pronto!!!") {
        alert(resultado);
    } else if (resultado !== null) {
        alert(`El resultado es: ${resultado}`);
    }
};

main();

