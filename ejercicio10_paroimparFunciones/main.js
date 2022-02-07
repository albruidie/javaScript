// creación de función para al in

function chekNumber(numero) {
    if (numero != 0) {
        if (numero % 2 === 0) {
           return `El número ${numero} es par`;
        } else {
            return`El número ${numero} es impar`;
        }

    } else {
        console.log('Introduce un número distinto de 0');
    }
}

// para verlo por consola, o poner el console.log con el return también para verlo por consola. 
let value = chekNumber(24);

console.log(value);

// function chekNumber(numero) {

//     if (numero % 2 === 0) {
//         retunr`El número ${numero} es par`;
//     } else {
//         return `El número ${numero} es impar`;
//     }
// }








