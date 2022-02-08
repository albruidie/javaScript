const users = [
    {name: 'Angelina Jolie',
     age: 80
    },
    {name: 'Eric Jones',
     age: 2
    },
    {name: 'Paris Hilton',
     age: 5
    },
    {name: 'Kayne West',
     age: 16
    },
    {name: 'Bob Ziroll',
     age: 100
    },
    
]; 


let namesOnly = users.filter(function(name) {
        return name.name === 'Angelina Jolie' || name.name === 'Bob Ziroll';
    });

console.log('namesOnly', namesOnly);





// creación de array con usuarios que no son premium

// const userNoPremium = users.filter (user => user.premium === false);

// // const usersNoPremium = users.filter(function(user) {
//     // return user.premium === false;
// // })

// console.log('userNoPremium', userNoPremium);
