// click sobre botón guardar, aparece un alert con una mensaje de guardado.

let button1 = document.getElementById('button1');

button1.addEventListener('click', save);
function save() {
    alert('Guardado');

};

// hacer foco. 
//  let input = document.getElementsByTagName('input');
//  console.log('input',input);
//  let inputNombre = input[0];
let inputNom = document.getElementById('inputNombre');

inputNom.addEventListener('focus', cambColorFocus);
function cambColorFocus() {
    inputNom.style.backgroundColor = 'red';
};

inputNom.addEventListener('focusout', cambColorFocusOut);
function cambColorFocusOut() {
    inputNom.style.backgroundColor = 'blue';
};

// según la tecla que se pulse, un color o otro -- keyCode.info en google, para saber el codigo de cada letra. 

let inputLetra = document.getElementById('inputLetra');
// inputLetra.addEventListener('keypress', changeColorVocalCons);
// metiendolo en el html con onkeypress = funcion(event) entre parentesis en este caso proqueu recibe un evento esta función, y nos ahorramos el añadir el eventListener. Se añade el evento en el HTML, y en JS solo se saca la variable de elemento y se crea la función. 



function changeColorVocalCons(event) {
    if (event.keyCode == 65 || event.keyCode === 69 || event.keyCode === 73 ||event.keyCode === 79 || event.keyCode === 85) {
        document.getElementById('inputLetra').style.color = 'red';
    } else {
        document.getElementById('inputLetra').style.color = 'blue';
    }
};
    








// let boton = document.getElementById('boton1');

// // le pongo el listened, lo que quiero que haga cuandos e interactua con el 

// boton.addEventListener('click', showMessage);

// // defino función 
// function showMessage() {
//     console.log('Has hecho click');
//     document.getElementById('demo').innerHTML = 'Has hecho click';
// };