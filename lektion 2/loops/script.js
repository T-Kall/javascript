const nameArray = ['Hans','Isabelle','Gustav','Amanda','Ali','Sasha','Fredrik','Mali'];
const userArray = [
    { name: 'Hans', email: 'hans@hans.com', age: 35, status: true },
    { name: 'Isabelle', email: 'isabelle@domain.com', age: 28, status: true },
    { name: 'Gustav', email: 'gustav@domain.com', age: 31, status: false },
    { name: 'Amanda', email: 'amanda@domain.com', age: 42, status: true },
    { name: 'Ali', email: 'ali@domain.com', age: 23, status: true },
    { name: 'Sasha', email: 'sasha@domain.com', age: 44, status: true },
    { name: 'Fredrik', email: 'fredrik@domain.com', age: 53, status: true },
    { name: 'Mali', email: 'mali@domain.com', age: 42, status: false }
];

//lägg till i början
nameArray.unshift('Hej hej');
console.log(nameArray)

//lägg till i slutet
nameArray.push('Då då');
console.log(nameArray);

//ta bort i början
nameArray.shift();
console.log(nameArray);

//ta bort i slutet
nameArray.pop();
console.log(nameArray);

//LOOPAR (for, foreach, while)

// for - när man vill loopa ett visst antal gånger

/*
for (let i = 0; i < nameArray.length; i++){ // hämtar alla - men loopar igenom alla
    console.log(`Index #${i} : ${nameArray[i]}`);
}*/

for (let i = 0; i <= 3 ; i++){
    console.log(`Index #${i} : ${nameArray[i]}`);
}

// foreach - loopar genom ett helt objekt /array/ lista
//loopar när man inte vet hur många objekt vi har

for (let name of nameArray) {
    console.log(name);
}

for (let user of userArray) {
    console.log(user.name + ', ' + user.age);
}

//äldre foreachloop
nameArray.forEach(function(name) {
    console.log(name);
})

nameArray.forEach(function(user) {
    console.log(user.name + ', ' + user.age);
})


//arrowfunction nyare
nameArray.forEach((name) => {
    console.log(name);
})

userArray.forEach(function(user) {
    // console.log(user.name + ', ' + user.age);
});

userArray.forEach((user) => {
    // console.log(user.name + ', ' + user.age);
});


// WHILE-LOOP
// kontrollera först - åtgärd beroende på om det är på ett visst sätt
// undvik evighetsloopar :-)


let i = 0;

/*
while (i < 5) {
    console.log(i);
    i++;
   
}*/

// DoWhile används sällan - tex ladda in en meny - ske minst en gång direkt 
// körs direkt utan att fråga

do {
    console.log(i);
    i++;    
} while (i < 5)





// console.log();