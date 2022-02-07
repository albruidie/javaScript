
let precio_kilometro 
let vehiculo =prompt('Introduce el tipo de vehículo: ')
let kms_recorridos = prompt('Introduce kilómetros recorridos: ')


if (vehiculo === 'coche') {
    precio_kilometro = 0.10;
    precio = precio_kilometro * parseInt(kms_recorridos);
} else if (vehiculo === 'moto') {
    precio_kilometro = 0.20;
    precio = precio_kilometro * parseInt(kms_recorridos);
} else if (vehiculo === 'bus') {
    precio_kilometro = 0.5;
    precio = precio_kilometro * parseInt(kms_recorridos);
};

if (kms_recorridos < 100) {
    precio = precio + 1;
} else {
    precio = precio + 2;
};

console.log(`El precio total es de ${precio}.`)



