// Definición de la función para saber el tipo de cadena que se introduce.

function tipoCadena(cadena) {
    if (cadena === cadena.toUpperCase()) {
        return `La cadena ${cadena} está escrita en mayúsculas`;
    } else if (cadena === cadena.toLowerCase()) {
        return `La cadena ${cadena} está escrita en minúsculas`;
    } else {
        return `La cadena ${cadena} está escrita en mayúsculas y minúsculas`;
    }
}
//  almacenamiento del valor devuelto por la función en una variable (ejecutamos la función pidiendole que el parámetro cadena lo introduzca el usuario).

let valueCadena = tipoCadena(cadena = prompt('Introduce una frase'));

// mostramos el el valor devuelto por la función para la frase introducida por el usuario a través de un alert.

alert (valueCadena);

// Otra forma de ejecutar a la función sin guardar el resultado devuelto previamente en una variable sería: 
// alert(tipoCadena(cadena = prompt('Introduce una frase')));











