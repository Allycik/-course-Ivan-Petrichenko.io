let menu = document.querySelector(".menu"),
    menuItem = menu.querySelectorAll(".menu-item"),
    newLi = document.createElement("li"),
    adv = document.querySelector(".adv"),
    title = document.getElementById("title"),
    promptForApple = document.querySelector("#prompt");

    newLi.classList.add("menu-item"),
    menu.appendChild(newLi),
    newLi.textContent = "Пятый пункт",
    title.textContent = "Мы продаем только подлинную технику Apple",
    adv.remove(),
    document.body.style.backgroundImage ='url("img/apple_true.jpg")',
    menu.insertBefore(menuItem[2],menuItem[1]);

    let yorOption = prompt("Какое ваше отношение к технике Apple?");
    promptForApple.textContent = yorOption;
    
    