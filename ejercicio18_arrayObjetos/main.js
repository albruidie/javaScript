const users = [
    {name: 'Angeline Jolie',
     age: 30
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


let namesOnly = users.map(function(name) {
        return name.name;
    });

console.log('namesOnly', namesOnly);





// creación de array con usuarios que no son premium

// const userNoPremium = users.filter (user => user.premium === false);

// // const usersNoPremium = users.filter(function(user) {
//     // return user.premium === false;
// // })

// console.log('userNoPremium', userNoPremium);
