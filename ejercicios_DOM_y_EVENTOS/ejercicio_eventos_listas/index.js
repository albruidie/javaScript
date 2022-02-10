let button1 = document.getElementById('button1');

let list = document.querySelector('ul');

function insertar() {
    var nuevoTexto = 'JavaScript'
    var nuevoli = document.createElement('li');
    var textli = document.createTextNode(nuevoTexto); 
    nuevoli.appendChild(textli);
    list.appendChild(nuevoli);
};