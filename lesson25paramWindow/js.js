let box = document.querySelector(".box"),
    btn = document.querySelector("button");

let height = box.scrollHeight,
    width = box.scrollWidth;

    console.log(height);
    console.log(width);
    console.log(box.getBoundingClientRect().right);//метод getBoundingClientRect покажет все координаты элем-та,а если нужен только один -через точку пишем какой именно.

    console.log(document.documentElement.clientWidth);//получим ширину нашего документа(страници);
    console.log(document.documentElement.clientHeight);
    console.log(document.documentElement.scrollTop);




    btn.addEventListener("click", function(){
        console.log(box.scrollTop);
        // box.style.height = box.scrollHeight + "px";// при нажатии на кнопку окно увеличится под весь контент;
        // box.scrollTop = 0;// при клике на кнопку -переместится прокрутка на самый вверх ;
    });
 

    scrollBy(0,200);//метод .перемещаем страницу по координатам относительно нашего текущего местоположения 
    scrollTo(0,200);//метод.переместит в определенные координаты на нашей странице
        
    