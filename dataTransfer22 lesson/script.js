// передача данных по ссылке или по значению (ES6 -ES9)


"use strict";

let a = 5,
    b = a;
   
b = b + 5;

console.log(b);
console.log(a);

// клонирование (поверхностные копии)

function copy (mainObj) {
    let objCopy  = {};

    let key;

    for (key in mainObj){
        objCopy[key] = mainObj[key];// скопировали все св-тва из старого обьекта и поместили в новую копию ;
    }
    return objCopy;
}

const numbers = {
    a: 3,
    b: 5,
    c: {
        x: 7,
        y: 4
    }
};

const newNumbers = copy(numbers);

newNumbers.a = 12;

// console.log(newNumbers);
// console.log(numbers);

// соединить два обьекта с помощью метода Object.assing(...,...);

let add = {
    d: 8,
    e: 18
}
console.log(Object.assign(numbers,add)); // соединили два обьекта в один 

const clone = Object.assign({},add); // создали клон 

clone.d = 20;

console.log(clone);
console.log(add);

// создаем копии массивов при помощи метода slice()

const oldArray = ["a","b","c"];
const newArray = oldArray.slice();// скопировали 

newArray[1] = "g";
newArray[0] = "k";

console.log(newArray);
console.log(oldArray);

// создаем копии при помощи оператора разворота (спред оператор)

const video = ["youtube", "vimeo" , "rutube"],
      blogs = ["wordpress", "livejournal", "blogger"],
      internet = [...video, ...blogs, "vk", "fasebook"];//...оператор спред

      console.log(internet);


      function log (a, b, c){
          console.log(a);
          console.log(b);
          console.log(c);
      }
      const num = [1,5,8];

      console.log(...num);// вывели каждый аргумент при помощи оператора спред ...


    //   прототип

    const soldier = {
        health: 500,
        armor: 100,
        sayHello: function(){
            console.log("Hello")
        }
    }
   
    const jonh = {
        health: 100
    }
 //1
    Object.setPrototypeOf(jonh , soldier) // теперь обьект john имеет доступ к обьекту soldier

    jonh.sayHello()
//2
    const jonh = Object.create(soldier) // мы создали новый обьект jonh - который будетт прототипно наследоваться от soldier