'use strict'

//filter 

const names = ["ivan", "anna", "valdemar","olga"];

const shochNames = names.filter(function(name) {
    return name.length < 5;
});
console.log(shochNames);

// map 

const answers = ['AnnA', "HenRi","jOra"];

const result = answers.map(item => item.toUpperCase());
console.log(result);

// every - вернет true - если все элементы соответсвует условию .иначе - false.

//some - вернет true - если хотя бы один элемент соответсвует условию .иначе - false.

const some = [5,"dfe", "wfww"];

console.log(some.some(item => typeof(item) === "number"));//true

console.log(some.every(item => typeof(item) === "number"));//false

//reduce - схлопывает (собирает) массив в одно единое целое
 
const arr = [2, 5, 7, 3, 1];
                        // 0      2
                        // 2      5
                        // 7      7 
                        // 14     3
                        // 17     1
const res = arr.reduce((sum, current) => sum + current, 3);//мы можем передать начальное значение ,в данном случае 3!Теперь не 0 будет первое значение а - 3
console.log(res); //сумма чисел 18



const arr = ["apple", "banane", "plum"];

const res = arr.reduce((sum, current) => `${sum}, ${current}`);
console.log(res);//запишется в строчку 

// метод обьекта - Object.entries() - сoздает массив в массиве 

// практический пример - нужно вернуть только имена 

const obj = {
 anna :"person",
 mike: "person",
 dog: "animal",
 cat: "animal"
}
const newArr = Object.entries(obj)//перевели обьект в массив 
.filter(item => item[1] === "person")// отфильтpовали массывы с вторым св-м persone 
.map(item => item[0]);// достали только имена 
console.log(newArr);