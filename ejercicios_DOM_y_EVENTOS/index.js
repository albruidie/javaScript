// por id
var element1 = document.getElementById('dewey');
console.log('id', element1);

// quiero los label (la etiqueta label)
var labels = document.getElementsByTagName('label');
console.log('label', labels);

var labelsCSS = document.getElementsByClassName('label-input');
console.log('labelCSS', labelsCSS);

//por los names 
// el atributo name agrupa los elementos, y hay que usarlo siempre con los radios, porque decimos así que solo puede haber una opción elegible.
var names = document.getElementsByName('drone');
console.log('name', names);

// nos permite coger los selectores css. Especificar si el parámetro es identificador o clase TRUCO, si no esta espcificado en la función, se debe indicar, # ó .
var element = document.querySelectorAll('#huey');
console.log('element', element);

// Acceso para cambiar los elementos, con método innerHTML
var nameFirst = document.getElementById('nameFirst')
nameFirst.innerHTML = 'Hola';
// otra forma (forma 2)
// document.getElementById('nameFirst').innerHTML = 'Chao';


// Acesso a traves de nodes. PARENT NODE
console.log('padre', nameFirst.parentNode);


// para eliminar nodos, acceder al padre, al hijo, y eliminar el hijo. 
// quiero borrar el input con id huey del padre con id first-option
let firstOption = document.getElementById('first-option');
let inputDelete = document.getElementById('huey');

firstOption.removeChild(inputDelete);



