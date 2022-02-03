const notas =[6,7,2,9,3,4,5,8,2];

let sumatotal = 0;

// for (let i= 0; i< notas.length; i++) {
//     sumatotal += notas[i];   
// }
// console.log(sumatotal);

for (let i of notas) {
    sumatotal += i;
}
console.log(sumatotal);






