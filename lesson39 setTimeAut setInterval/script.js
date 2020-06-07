const btn = document.querySelector(".btn");
let timerId,
    i = 0;

// btn.addEventListener("click", () => {
// //    const timerId = setTimeout(logger, 2000);
//     timerId = setInterval(logger, 1000);// через каждые 2 сек после нажатия на кнопку - появляться будет текст Test
// });

// function logger (){
//     if (i === 3){
//         clearInterval(timerId);
//     }
//     console.log("Test");
//     i++;
// }
// // рекурсивный  вызов setTimeout - 
// let id = setTimeout (function log (){
//     console.log("hello");
//     id = setTimeout(log,500);
// },500);

// practic

function myAnimation (){
  const elem = document.querySelector(".box");
  let pos = 0;

  let id = setInterval(frame,10);
  function frame (){
      if (pos == 300){
          clearInterval(id);
      } else {
          pos++;
          elem.style.top = pos + 'px';
          elem.style.left = pos + 'px';
      }
  }
}
 btn.addEventListener('click', myAnimation);


 // работа с датами

let start = new Date();

for (let i = 0; i < 100000; i++){
    let some = i ** 3;
};

let end = new Date();

alert (`цикл отработал за ${end - start} миллисекунд`);