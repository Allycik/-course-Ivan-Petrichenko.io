let money, time;

function start (){
    money = + prompt("Ваш бюджет на месяц?", "");
    time = prompt("Введите дату в формате YYYY-MM-DD", '');

    while(isNaN(money) || money == "" || money == null){
        money = + prompt("Ваш бюджет на месяц?", "");
    }
}
start();

let appData = {
    budget:money,
    timeData:time,
    expenses:{},
    optionalExpenses:{},
    income:[],
    savings:true,
};
 function chooseExpenses (){
    for (let i = 0;i < 2; i++) {
        let a = prompt("Введите обязательную статью расходов в этом месяце");
            b = prompt("Во сколько обойдется?");
             if ((typeof(a)) === "string" && (typeof(a)) != null && (typeof(b)) != null 
             && a != '' && b != "" && a.length < 40){
                appData.expenses[a] = b;
             } else {
                 alert("что-то пошло не так")
             }
     }
     
 }
    chooseExpenses();
    
  function derectDayBudget () {
    appData.moneyPerDay = Math.floor((appData.budget / 30)*100)/100;
    alert("Ежедневно бюджет: " + appData.moneyPerDay);
 }
  derectDayBudget ();
 
   function derectLevel (){
    if (appData.moneyPerDay < 100){
        alert("Минимальный доход");
    } else if (appData.moneyPerDay >200 && appData.moneyPerDay < 2000){
        alert("Средний доход");
    } else if (appData.moneyPerDay > 2000 && appData.moneyPerDay < 80000){
        alert ("выше среднего доход")
    }else {
        alert ("произошла ошибка")
    }
   };
   derectLevel ();
   
   function checkSavings (){
      if(appData.savings == true){
          let save = +prompt("Какова сумма накоплений?"),
              persent = +prompt("Под какой процент?");

              appData.monthIncome = save/100/12 * persent;
              alert("Доход в месяц с вашего депозида : " + appData.monthIncome);
      }
   }
   checkSavings();

   function chooseOptExpenses(){
       for ( let i = 1;i < 4; i++) {
           let quectionOptionalExpenses = + prompt ("Статья необязательных расходов");
           appData.optionalExpenses [i]=quectionOptionalExpenses;
           console.log(appData.optionalExpenses);
       }
   };
   chooseOptExpenses();


