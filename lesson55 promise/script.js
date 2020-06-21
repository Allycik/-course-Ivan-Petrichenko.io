'use strict';

// console.log("запрос данных...");

// const req = new Promise(function (resolve, reject) {

//     setTimeout(() => {
//         console.log("данные обрабатываются...");
    
//         const product = {
//             name : 'TV',
//             price: 2000
//         };
    
//         resolve(product);
//     },2000);
// });
// req.then((product) => {
//     return new Promise((resolve, reject) => {
//         setTimeout (() => {
//             product.status = "order";
//             resolve(product);
//         },2000);
//     });

// }).then(data => {
//     data.modify = true;
//     return data;
// }).then((data) => {
//    console.log(data);
// });

// метод all - ждет когда выполняться все функции промисы внутри массива 

const test = time => {
    return new Promise(resolve => {
        setTimeout(() => resolve(),time);
    });
};
// test(1000).then(() => console.log("1000ms"));
// test(2000).then(() => console.log("2000ms"));

Promise.all([test(1000), test(2000)]).then(() => {
console.log("All");
});

// метод race -выполняет действия когда самый первый промис отработал 

Promise.race([test(1000), test(2000)]).then(() => {
    console.log("All");
    });
    