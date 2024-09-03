
const plus = (a,b) => {
    var sum= a+ b;
    return sum

};
const subtract = (/*recibe*/) =>{
    //Code
} ;
const multiply = (/*recibe*/) =>{
    //Code
} ;
const split = (/*recibe*/) => {
    //Code
};
const requestNumber = (/*recibe*/) => {
    var a= parseInt(prompt("Ingrese un número:"));
    var b=parseInt(prompt("Ingrese otro número:"))
};

const selectOperation = () => {
    var opcion=prompt("Ingrese la operacion que desee realizar:")
    switch (opcion) {
        case 1:
            plus(a,b);
            alert()
            
            break;
    
        default:
            break;
    }
};

const main = () => {
    requestNumber();
    selectOperation();
}

main();
