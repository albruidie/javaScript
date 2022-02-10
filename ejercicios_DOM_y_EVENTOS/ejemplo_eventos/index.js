let boton = document.getElementById('boton1');

// le pongo el listened, lo que quiero que haga cuandos e interactua con el 

boton.addEventListener('click', showMessage);

// defino función 
function showMessage() {
    console.log('Has hecho click');
    document.getElementById('demo').innerHTML = 'Has hecho click';
};