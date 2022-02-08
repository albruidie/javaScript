
// Creación de una clase (nombre en Mayuscula la primera)
class Food {
    value = 10;
    color = 'red';
    eat() {
        console.log('humm')
    }
};

//  las funciones de una clase se llaman métodos (eat(), que nos muestra por consola el mensaje humm)


// Instancia de clase 
const apple = new Food(); 
// ahora tengo acceso a apple. Vamos a pantalla (consola F12). Desde consola tengo acceso al objeto, y a sus propiedades --> apple.value; apple.color y a los métodos de la clase (apple.eat())

const donut = new Food();

// hasta aqui los objetos apple y donuts son los mismo, pero lo normal es qeu cambian las propiedades. Para modificar accedo al objetoo directamente.
// nuevo atribuot a apple

apple.type = 'Reineta';

// nuevo metodo a apple

apple.show = () => console.log('Es una manzana');
apple.hide = function() {
    return 'Nope'
};


// Clases 2 
// Esta clase coche va a recibir valores, por ejemplo la marca usamos metodo constructor
class Coche {
    constructor (marca, color) {
        this.brand = marca;
        this.color = color;

        // definir metodo. Para ello tambien palabra reservada this.
        this.show = function() {
            return 'El coche es de marca ' + this.brand;
        }
    }
    // definir un método que no use ninguna propiedad de la clase coche, pues fuera del constructor. Y desde fuera tambien tenemos acceso a las propiedades this. Podemos definir metodos dentro o fuera del constructor. Dentro obligatorio this. fuera no. 
    run () {
        return 'Listo'
    };
    acabado () {
        console.log ('Acabado', this.brand);
        return 'Acabado ' + this.brand;
    };
}

// Instancia de la clase coche pasando el valor como parámetro
// MUY IMPORTANTE EL ORDEN AL PASAR LOS VALORES DE LOS PARÁMETROS. 
// Si no pasamos un parámetro, pone undefined
const hyundai = new Coche('Hyundai', 'green');
const coche2 = new Coche('Kya', 'yellow');
// En consola accedemos a atributos de coche2 coche2.brand -->'Kya'




