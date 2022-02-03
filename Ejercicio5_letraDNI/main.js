const letras = ['T','R','W','A','G','M','Y','F','P','D','X','B','N','J','Z','S','Q','V','G','L','C','K','E','T'];

let numeroDni = prompt("Indica tu número de DNI sin letra");

if (numeroDni <0 || numeroDni >99999999){
    alert('El número proporcionado no es válido')
    console.log('El número proporcionado no es válido');
} else if (numeroDni ===''){
    alert('Introduce un número');
} else {
        indiceLetra = numeroDni%23;
        alert(letras[indiceLetra]);
    }

