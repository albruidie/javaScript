
// let topping1 = 'oreo';

// let topping2 = 'KitKat'

// let topping3 = 'brownie';

// let topping4 = 'lacasitos';

// if (topping == topping1) {
//     alert("El topping cuesta 1€");
// } else if (topping == topping2) {
//     alert("El topping cuesta 1.50€");
// } else if (topping == topping3) {
//     alert("El topping cuesta 0.70€");
// } else if (topping == topping4) {
//     alert("El topping cuesta 0.95€");
// } else {
//     alert("no tenemos este topping, lo sentimos");
//     alert("El helado sin topping cuesta 1.90€");
// }

let topping = prompt('Elija su topping');

const toppings = ['oreo','KitKat','brownie','lacasitos'];

let heladoSinTopping = 1.90;



if (topping == toppings[0]) {
    heladoSinTopping += 1;
    alert("El topping cuesta " + heladoSinTopping);
} else if (topping == toppings[1]) {
    heladoSinTopping += 1.50
    alert("El topping cuesta " + heladoSinTopping);
} else if (topping == toppings[2]) {
    heladoSinTopping += 0.70;
    alert("El topping cuesta " + heladoSinTopping);
} else if (topping == toppings[3]) {
    heladoSinTopping += 0.95;
    alert("El topping cuesta " + heladoSinTopping);
} else {
    alert("no tenemos este topping, lo sentimos")
    alert("El helado sin topping cuesta " + heladoSinTopping);
}


