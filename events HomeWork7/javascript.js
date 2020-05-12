// let btn = document.querySelectorAll("button"),
//     wrap = document.querySelector(".wrapper"),
//     link = document.querySelector("a")

// // btn[0].onclick = function(){
// //     alert("Вы нажали первую кнопку !");
// // }

// btn[0].addEventListener('click', function(event) {
//     console.log("Произошло событие : " + event.type + " на элементе " + event.target);

// });

// wrap.addEventListener("click", function(){
//     console.log("Произошло событие : " + event.type + " на элементе " + event.target);
// });

// link.addEventListener("click", function(event){
//     event.preventDefault();
//     console.log("Произошло событие : " + event.type + " на элементе " + event.target);
// });

// btn.forEach(function(item){
//     item.addEventListener('mouseleave',function(){
//         console.log("Вышли!");
//     })
// });

 
// btn[0].addEventListener("mouseenter", function() {
//     alert('Вы навели на первую кнопку');
// });


//  события для мобильных устройств 

// touchstart - это событие срабатывает при возникновении касания к элементу(аналог клика):
// touchmove - событие возникает после того как пользователь прикоснулся к элементу и перемещает палец в какую-то другую точку:
// touchand - это событие возникает когда наш палец уже отодвигается т.е перестает соприкасаться с нашей поверхностью:
// touchenter - это событие возникает когда наш палец заходит на какой то элемент:
// touchleave -  это событие возникает когда наш палец покинул пределы элемента:
// touchcancel - это событие возникает тогда когда точка соприкосновения больше не регистрируется на поверхности:


// window.addEventListener("DOMContentLoaded", function(){
//     let box = document.querySelector(".box");

//     box.addEventListener("touchstart", function(event){
//      event.preventDefault(); // что-бы избавиться от всех негативных влияний стандартного поведения браузера
        
        // console.log("red box" + event.touches[0].pageX);// получим координаты пальца
//      console.log("red box : touchstart ");
//      console.log(event.target);
//      console.log(event.touches[0].target);

//     })
// });


// РЕГУЛЯРНОЕ ВЫРАЖЕНИЕ (pattern, flags).Pattern -(шаблон) это то что мы хотим найти .Flags - это 

// new RegExp("pattern","flags");
// /pattern/;

// let ans = prompt("Введите ваше имя");

// let reg = /n/;

// console.log(reg.test(ans));
// console.log(ans.search(reg));
// console.log(ans.match(reg));

// let pass = prompt("Введите пароль");

// console.log(pass.replace(/./g, "*"));
// alert("12-35-78".replace(/-/g, "$"));


// let ans = prompt("Введите число");

//  let reg = /\d/g;
//  console.log(ans.match(reg));


// let str = "My name is /R2D2";

// console.log(str.match(/\w\d\w\d/i));
// console.log(str.match(/\//));


//flags :
//i - флаг регистра который говорит что мы хотим найти что-то в независимости от регистра 
//g - флаг глобальности .мы ищем глобально т.е не только первое вхождение но и все остальные 
//m - флаг многострочности ;

//Классы :
// \d - ищет цифру (либо все цифры если поставить флаг глобально)
// \w - ищет буквы 
// \s - ищет пробелы 
// 

    // Методы строк в регулярных выражений :

    // 1- search - ищет всегда первое совпадение в строках по регулярному выражению;
    // 2- match - если без знака g -то тоже найдет первое совпадение но вернет в виде массива.
    // Если же добавить флаг g тогда получим массив со всеми совпадениями;
    // replace - заменяет ;
    // метод регулярного выряжения:
    // test - проверяет есть ли вообще совпадения - true /false;

    
    // 

   






