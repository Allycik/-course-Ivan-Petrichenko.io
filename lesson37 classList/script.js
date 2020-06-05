const btns = document.querySelectorAll("button");
  // методы classList
// console.log(btns[0].classList.length);
// console.log(btns[0].classList.item(0));// item() - получаем класс кот.расположен под определенным индексом 
// console.log(btns[1].classList.add('red')) // add() - добавлем определенные классы 
// // console.log(btns[0].classList.remove('blue')) // remove() - удаляем класс
// // console.log(btns[0].classList.toggle('blue')) // togle() - переключение классов - позволяет тоглить -если он есть этот класс -то убирает .и наоборот если класса нет - добавляет 

// if (btns[1].classList.contains("red")){
//     console.log("red");
// };

btns[0].addEventListener("click", function(){
    // if (!btns[1].classList.contains('red')){
    //     btns[1].classList.add('red');
    // } else {
    //     btns[1].classList.remove('red');
    // }

    // 2 й вариант 
    btns[1].classList.toggle("red"); 
});


// делегирование событий 