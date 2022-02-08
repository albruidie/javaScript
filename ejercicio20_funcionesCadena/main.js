// Primer ejercicio, poner primera letra de palabra en mayúscula.
let frase = 'esri';

let frasePrimeraMayus = frase[0].toUpperCase().concat(frase.substring(1));

console.log(frasePrimeraMayus);

// Segundo ejercicio, poner primera letra de cada palabra en mayúscula.

let texto = 'environmental systems research institute';

let palabras = texto.split(" ")
.map(palabra => palabra[0].toUpperCase() + palabra.substring(1))
.join(' ');

console.log(palabras);

