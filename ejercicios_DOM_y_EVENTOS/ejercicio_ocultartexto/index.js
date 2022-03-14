let readMore = document.getElementById('readmore');
let parrafo = document.getElementById('desplegar');

function read() {
    if (readMore.innerHTML === 'Read more') {
        parrafo.style.display='block';
        dots.style.display = 'none';
        readMore.innerHTML = 'Read less';
    } else {
        parrafo.style.display = 'none';
        dots.style.display = 'inline';
        readMore.innerHTML = 'Read more'
    }
        
    
        
    
};



// let button1 = document.getElementById('button1');

// let list = document.querySelector('ul');

// function insertar() {
//     var nuevoTexto = 'JavaScript'
//     var nuevoli = document.createElement('li');
//     var textli = document.createTextNode(nuevoTexto); 
//     nuevoli.appendChild(textli);
//     list.appendChild(nuevoli);
// };