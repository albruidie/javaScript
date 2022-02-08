
// class Periarea {
//     constructor (lado) {
//         this.lado = lado;
        
//         this.perimetro = function() {
//             console.log('El perímetro es  ' + (this.lado * 4)) ;
//         }
//         this.area = function() {
//             console.log('El área es ' + (this.lado * this.lado));
//         }

         
//     }

// }
   
// const cuadradoPequeño = new Periarea(2);
// const cuadradoMediano = new Periarea(5);
// const cuadradoGrande = new Periarea(10);

class Square {
    constructor(side) {
        this.area = side * side;
        this.perimeter = side * 4;
    }

    showArea() {
        console.log('El área es de ' + this.area);
    }

    showPerimeter() {
        console.log('El área es de ' + this.perimeter);
    }
}

const cuadradoPequeño = new Square(2);
const cuadradoMediano = new Square(5);
const cuadradoGrande = new Square(10);

// podemos declarar una variable lado y darle un valor, y pasarla como parámetro al instanciar. 
