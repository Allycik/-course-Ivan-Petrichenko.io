document.addEventListener("DOMContentLoaded", () => {

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
      


   

       

            
        





});