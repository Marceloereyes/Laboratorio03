const calculateFactorial = (n) => {
    let factorial = 1;
    for (let i = 1; i <= n; i++) {
        factorial *= i;
    }
    return factorial;
};

const requestNumber = () => {
    let number;
    while (true) {
        number = prompt("Introduce un número entero no negativo para calcular su factorial:");
        if (number === null) {
            return null;
        }
        number = parseInt(number, 10);
        if (isNaN(number) || number < 0) {
            alert("Número no válido. Tiene que ser un número no negativo :).");
        } else {
            return number;
        }
    }
};

const main = () => {
    let number = requestNumber();
    if (number === null) return;

    let resultado = calculateFactorial(number);
    alert(`El factorial de ${number} (iterativo) es: ${resultado}`);
};

main();
