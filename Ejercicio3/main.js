const numero2 = 8
let numero1 = 5

if (numero2 < 0 || numero2 >=1){
    console.log(numero2)
}

// El incrementar en una unidad el valor de numero 1 no lo hacer mayor o igual al numero2

if (numero1++ <= numero2) {
    console.log('sí')
}

// prompt pide inofmración al usuario 
let name = prompt('Dime tu nombre')

console.log('name',name)