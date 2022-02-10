let animal = prompt('Indica tu animal favorito: ');

let miAnimal = 'Gato';

// let resultado = document.getElementById('result');
// if (animal === miAnimal) {
//     resultado.innerHTML = 'Has acertado';
//     resultado.style.color = "green";

// } else {
//     resultado.innerHTML = 'Has fallado';
//     resultado.style.color = "red";
// };

if (animal === miAnimal) {
    document.getElementById('result').innerHTML = 'Has acertado';
    document.getElementById('result').style.color = "green";
    document.getElementById('foto').style.display = '';
} else {
    document.getElementById('result').innerHTML = 'Has fallado';
    document.getElementById('result').style.color = "red";
    
};
