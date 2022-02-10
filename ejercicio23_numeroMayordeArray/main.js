const numeros =[20,2,58,35,13];

// Suponemos que la posición 0 del array (primer número) es el de mayor valor, y lo guardamos en una variable.

let mayorValor = numeros[0];

// Recorremos el array, iniciandolo en 1, ya que posición cero ya esta contemplada en variable. Se recorre y se compara cada valor con el valor supuesto mayor guardado en variable. Si es mayor que este, la variable pasa a tener el nuevo valor y se sigue comparando, hasta que ningun valor sea superior a ella, y entonces es el valor final.

for (let i= 1; i < numeros.length; i++) {
    if (numeros[i] > mayorValor) {
        mayorValor = numeros [i];
    }
}
console.log('El número mayor del Array es ' + mayorValor);







