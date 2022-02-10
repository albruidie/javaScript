class Cliente {
    constructor(nombre, direccion, tlf, nif) {
        this.name = nombre;
        this.address = direccion;
        this.phone = tlf;
        this.id = nif;
    }
};

class Elemento {
    constructor(descripcion, cantidad, precio) {
        this.description = descripcion;
        this.quantity = cantidad;
        this.price = precio;
    }
};

class Factura {
    constructor(cliente, elementos) {
        this.client = cliente;
        this.elements = elementos;
        this.info = {
            baseImponible: 0,
            iva: 21,
            metodo: "contado",
            total: 0
        }

        this.totalPrice = function () {
            // con la función map, y con el index por defecto podemos recorrer en orden.
            // this.elements.map(function(elemento, index) {

            // })

            for (let i = 0; i < this.elements.length; i++) {
                this.info.baseImponible += this.elements[i].quantity * this.elements[i].price;
                this.info.total = this.info.baseImponible * (1 + (this.info.iva/100));

                // MI FORMA
                // this.info.total += (this.elements[i].quantity * this.elements[i].price) * (1 + (this.info.iva / 100))

            };
            console.log('Total de la factura: ' + this.info.total + ' euros.');
        }


    }

};
    


const cliente1 = new Cliente ('María', 'Calle Gracia', 1562568, '584932654R');
const art1 = new Elemento('boli', 5, 1);
const art2 = new Elemento('lapiz', 1, 2);

const bill = new Factura(cliente1, [art1, art2]);

// acceder al precio del articulo 1 de la factura bill (en consola): bill.elements[0].price
