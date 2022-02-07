const meses = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];

// con funciones flecha

const mesesLenghtMays = meses
.filter(mes => mes.length > 7)
.map(mes => mes.toUpperCase());

console.log('mesesLenghtMays', mesesLenghtMays);

const numeroMeses = mesesLenghtMays.length();

console.log(`Con más de siete letras solo hay ${numeroMeses} meses`);


// sin funciones flecha

const mesesLenghtMays2 = meses
.filter(function(mes) {
    return mes.length > 7
})
.map(function(mes) {
    return mes.toUpperCase()
});

console.log('mesesLenghtMays2', mesesLenghtMays2);