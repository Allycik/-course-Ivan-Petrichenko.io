// событие - touchstart - при возникновнении касания к этому элементу 
// событие - touchmove - если палец при касании начинает двигаться
// событие - touchend - как только наш палец оторвался от элемента 
// событие - touchenter - когда мы ведем и при этом наскакиваем на элемент на кот навешано событие 
// событие - touchleave - когда палец продолжил скользить и ушел за пределы этого элемента
// событие - touchcancel - когда точка соприкосновения больше не регистрируется на поверхности

document.addEventListener("DOMContentLoaded" , ()=> {

    const box = document.querySelector(".box");

    box.addEventListener("touchstart", (e) => {
    e.preventDefault();
    console.log("start");
    console.log(e.targetTouches); // можем отслеживать  координаты move
    });

    box.addEventListener("touchmove", (e) => {
    e.preventDefault();
    console.log(e.targetTouches[0].pageX);// можем отслеживать  координаты move
    });


    // box.addEventListener("touchend", (e) => {
    // e.preventDefault();
    // console.log("end");
    // });


    // Cвойства при работе с сенсорными устройствами :

    // touches - это сво-тво выдает список всех пальцев которые сейчас взаимодействуют с экраном 
    // targetTouches -пальцы которые взаимодействуют именно с этим элементом 
    // changetTouches - список пальцев котор учавствуют в текущем событии (пальцы котор уже совершили определенное назначенное уже  действие)



    
})