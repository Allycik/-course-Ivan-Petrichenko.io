document.addEventListener("DOMContentLoaded", () => {

    // tabs

const tabs = document.querySelectorAll(".tabheader__item "),
      tabsContent = document.querySelectorAll(".tabcontent"),
      tabsParent = document.querySelector(".tabheader__items");

      //скрываем контент 

      function hideTabsContant () {
          tabsContent.forEach ( item => {
              item.classList.add("hide");
              item.classList.remove("show");
          });

          tabs.forEach (item => {
              item.classList.remove("tabheader__item_active");
          })
      }

      // показываем табы 

      function showTabContent (i = 0){
          tabsContent[i].classList.add("show",'fade');
          tabsContent[i].classList.remove("hide");
          tabs[i].classList.add("tabheader__item_active");
      };

      hideTabsContant();
      showTabContent();

      tabsParent.addEventListener("click", (event) => {

        if (event.target && event.target.classList.contains ("tabheader__item")) {
            tabs.forEach((item,i) => {
                if (event.target == item){
                    hideTabsContant();
                    showTabContent(i);
                }
               
            });
        }
      });

      // timer

      const deadline = "2020-06-15";

      function getTimeRemaining(endtime) {
          const t = Date.parse(endtime) - Date.parse(new Date()), // разница в милиссек-х между временем конечным и сегодняшним 
              days = Math.floor( (t/(1000*60*60*24)) ),
              hours = Math.floor( (t/(1000*60*60) % 24) ),
              minutes = Math.floor( (t/1000/60) % 60 ),
              seconds = Math.floor( (t/1000) % 60 );
              
        
  
          return {
              'total': t,
              'days': days,
              'hours': hours,
              'minutes': minutes,
              'seconds': seconds
          };
      }
  
      function getZero(num){
          if (num >= 0 && num < 10) { 
              return '0' + num;
          } else {
              return num;
          }
      }
  
      function setClock(selector, endtime) {
  
          const timer = document.querySelector(selector),
              days = timer.querySelector("#days"),
              hours = timer.querySelector('#hours'),
              minutes = timer.querySelector('#minutes'),
              seconds = timer.querySelector('#seconds'),
              timeInterval = setInterval(updateClock, 1000);// перезапускаем через секунду 
  
          updateClock();
  
          function updateClock() {
              const t = getTimeRemaining(endtime);
  
              days.innerHTML = getZero(t.days);
              hours.innerHTML = getZero(t.hours);
              minutes.innerHTML = getZero(t.minutes);
              seconds.innerHTML = getZero(t.seconds);
  
              if (t.total <= 0) {
                  clearInterval(timeInterval);
              }
          }
      }
  
      setClock('.timer', deadline);

      //modal 

      const modalTrigger = document.querySelectorAll("[data-modal]"),
            modal = document.querySelector(".modal"),
            modalCloseBtn = document.querySelector("[data-close]");


            function openModal() {
            modal.classList.add("show"); // 1й вариант открыть модальное окно и скрыть 
            modal.classList.remove("hide");// 1й вариант открыть модальное окно и скрыть 
            // modal.classList.toggle("show"); // 2й вариант открыть модальное окно и скрыть 
            document.body.style.overflow = 'hidden'; //запретили прокрутку страницы
            clearInterval(modalTimerId);// отменили вызов модального окна через 3 сек
            }


            modalTrigger.forEach(item => {
                item.addEventListener("click", openModal)
            });

            function closeModal () {
            modal.classList.add("hide");
            modal.classList.remove('show');
            // modal.classList.toggle("show");// 2й вариант открыть модальное окно и скрыть 
            document.body.style.overflow = ''; //восстановили прокрутку 

            };
            

            modalCloseBtn.addEventListener("click", closeModal);

            modal.addEventListener("click", (e) => {
                if (e.target === modal){
               closeModal();
                }
            });

            document.addEventListener("keydown", (e) => {
                if (e.code === 'Escape' && modal.classList.contains("show")) {
                    closeModal();
                }
            });

            const modalTimerId = setTimeout(openModal,3000);//появление модального окна через 3 сек 

           // появление модального окна когда прокрутил в самый низ страницы 
            function showModalByScroll (){
                if(window.pageYOffset + document.documentElement.clientHeight >= document.
                    documentElement.scrollHeight){
                    openModal();
                    window.removeEventListener("scroll",showModalByScroll); //удалили что бы не показывалось больше чем  раз 
                }
            }

            window.addEventListener("scroll",showModalByScroll)
     
          
      


      


   

       

            
        





});