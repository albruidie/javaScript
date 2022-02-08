const users = [
    {username: 'ppc90', age: 30, premium: false},
    {username: 'lu65', age: 24, premium: false},
    {username: 'maria3', age: 36, premium: false},
    {username: 'abc123', age: 20, premium: true},
    {username: 'sergio58', age: 26, premium: true},
]; 


// función .map, que aplica misma función a cada uno de los elementos

users.map(function(user) {
    if (user.premium === true) {
        console.log(`El usario ${user.username} es usuario premium`)
    }
});

// Otra forma de hacerlo --> bucle for para recorrer el array de objetos, y acceso a cada objeto por el indice.propiedad

// for (let i = 0; i < users.length; i++) {
//     if (users[i].premium === true) {
//         console.log(`El usario ${users[i].username} es usuario premium`);
//     };
// };


// creación de array con usuarios que no son premium

const userNoPremium = users.filter (user => user.premium === false);

// const usersNoPremium = users.filter(function(user) {
    // return user.premium === false;
// })

console.log('userNoPremium', userNoPremium);
