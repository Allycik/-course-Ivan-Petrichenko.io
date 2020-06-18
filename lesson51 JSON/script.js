'use strict';

const person =  {
    name : "alex",
    tel : "+38041565325",
    parents: {
        mom : "Olga",
        dad : "Tolik"
    }
};

const clone = JSON.parse(JSON.stringify(person)); // склонировала обьект глубокая копия!!!
clone.parents.mom = "Anna";
console.log(clone.parents.mom);
console.log(person.parents.mom);