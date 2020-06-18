'use strict';

const inputRub = document.querySelector('#rub'),
      inputUsd = document.querySelector('#usd');

inputRub.addEventListener('input', () => {
    const request = new XMLHttpRequest();

    request.open('GET', 'js/current1.json'); // ЭТОТ метод собирает настройки принимает (метод,url,async,login,passport)
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    request.send();//щтправляем запрос .если GET запрос то ничего не передаем,eсли POST то внутри передаем тело запроса

    request.addEventListener('load', () => {
        if (request.status === 200) {
            const data = JSON.parse(request.response);
            inputUsd.value = (+inputRub.value / data.current.usd).toFixed(2);
        } else {
            inputUsd.value = "Что-то пошло не так";
        }
    });

});


    // stаtus - показывает статус нашего запроса (200 - хорошо . 404 -не найден и т.д)
    // statusText - текстовое описание ответа от сервера 
    // response - это ответ от сервера - который нам задал бекэнд разр-к
    // readyState - покажет текущее состояние обьекта (0-unset,1-opened,2-headers-recevied,3-loading, 4-done)


   