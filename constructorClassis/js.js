// function User (name, id) {
//     this.name = name,
//     this.id = id,
//     this.human = true,
//     this.hello = function (){
//         console.log("Hello "  +  this.name);
//     };
// }
// User.prototype.exit = function (){
//     console.log("Пользователь " + this.name + ' вышел');
// };

// User.prototype.enter = function() {
//     console.log(this.name + ' сейчас ' + " вошел");
// };

// let ivan = new User ("Ivan", 29),
//     tolik = new User ("Tolik", 38);

//     console.log(ivan);
//     console.log(tolik);

//     ivan.exit();
//     tolik.enter();


// 1
// 'use strict'
//  function showThis (a,b){
//      console.log(this)
//      function sum(){
//          console.log(this)
//          return a + b
//      }
//      console.log(sum());
//  };
//  showThis(4,9);
//  showThis(2,6);


// 2
// let obj = {
//     'a': 20,
//     'b': 15,
//     'sum': function(){
//         console.log(this)
//     }
// };
// obj.sum();

// 4
// let user = {
//     name:"John"
// };
//  function sayName(surname){
//  console.log(this.name +  surname);
//  }
//  console.log(sayName.call(user, " Smith"));
//  console.log(sayName.apply(user,[" Adun"]));

 
//  function count (number){
//      return this * number; 
//  }
//  let double = count.bind(2);

//  console.log(double(5));
//  console.log(double(20));

let btn = document.querySelector("button");

 btn.addEventListener("click", function(){
     console.log(this)
     this.style.background = "red";
 })

 //1 - что бы получить контекст вызова -мы просто вызываем функцию и получаем window/undefined (если вкл.строгий режим)
// 2 - методы обьектов это тоже функции => метод обьекта this = обьект 
// 3 - конструктор (new) - this = новый созданный обьект  
//4 - указание конткретного контекста - call(), apply(),bind();