let startBtn = document.querySelector("#start"),
    budgetValue = document.querySelector(".budget-value"),
    dayBudgetValue = document.querySelector(".daybudget-value"),
    levelValue = document.querySelector(".level-value"),
    expensesValue = document.querySelector(".expenses-value"),
    optionalexpensesValue = document.querySelector(".optionalexpenses-value"),
    incomeValue = document.querySelector(".income-value"),
    monthSavingsValue = document.querySelector(".monthsavings-value"),
    yearSavingsValue = document.querySelector(".yearsavings-value"),
    expensesItem = document.querySelectorAll(".expenses-item"),
    expensesBtn = document.getElementsByTagName('button')[0],
    optionalExpensesItem = document.querySelectorAll(".optionalexpenses-item"),
    optionalExpensesBtn = document.getElementsByTagName('button')[1],
    countBtn = document.getElementsByTagName('button')[2],
    incomeItem = document.querySelector('.choose-income'),
	checkSavings = document.querySelector('#savings'),
	sumValue = document.querySelector('.choose-sum'),
    percentValue = document.querySelector('.choose-percent'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value');


let money, time;

startBtn.addEventListener("click", function(){
   
    time = prompt("Введите дату в формате YYYY-MM-DD", '');
    money = + prompt("Ваш бюджет на месяц?", "");

    while(isNaN(money) || money == "" || money == null){
        money = + prompt("Ваш бюджет на месяц?", "");
    }
    appData.budget = money;
    appData.timeData = time;
    budgetValue.textContent = money.toFixed();
    yearValue.value = new Date(Date.parse(time)).getFullYear();
    monthValue.value = new Date(Date.parse(time)).getMonth() +1;
    dayValue.value = new Date(Date.parse(time)).getDate();
});


expensesBtn.addEventListener("click",function(){
    let sum = 0 ;
    for (let i = 0;i < expensesItem.length; i++) {
        let a = expensesItem[i].value;
            b = expensesItem[++i].value;
             if ((typeof(a)) === "string" && (typeof(a)) != null && (typeof(b)) != null 
             && a != '' && b != "" && a.length < 40){
                appData.expenses[a] = b;
                sum += +b;
             } else {
                 i = i - 1;
             }
     }
     expensesValue.textContent = sum;
});


optionalExpensesBtn.addEventListener("click", function(){
    for ( let i = 0;i < optionalExpensesItem.length; i++) {
        let quectionOpt = optionalExpensesItem[i].value;
        appData.optionalExpenses [i]=quectionOpt;
        optionalexpensesValue.textContent +=appData.optionalExpenses[i] +" ";
    }
});

countBtn.addEventListener("click", function(){

    if (appData.budget != undefined){
        appData.moneyPerDay = Math.floor((appData.budget / 30)*100)/100;
        dayBudgetValue.textContent = appData.moneyPerDay;
    
        if (appData.moneyPerDay < 100){
            levelValue.textContent = "Минимальный доход";
        } else if (appData.moneyPerDay >200 && appData.moneyPerDay < 2000){
            levelValue.textContent = "Средний доход";
        } else if (appData.moneyPerDay > 2000 ){
            levelValue.textContent = "выше среднего доход";
        }else {
            levelValue.textContent = "произошла ошибка";
        }
    } else {
        dayBudgetValue.textContent = "Произошла ошибка!";
    }
   
});

incomeItem.addEventListener("change",function(){
    let  items = incomeItem.value;
    appData.income = items.split(",");
    incomeValue.textContent = appData.income;
});

checkSavings.addEventListener("click", function(){
  if (appData.savings == true) {
      appData.savings = false;
  } else {
      appData.savings = true;
  }
});

sumValue.addEventListener("input", function(){
    if (appData.savings == true) {
     let sum = +sumValue.value,
         percent = +percentValue.value;

    appData.monthIncome = sum/100/12 * percent;
    appData.yearIncome = sum/100 * percent;

    monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
    yearSavingsValue.textContent = appData.yearIncome.toFixed(1);

    }
});

percentValue.addEventListener("input", function (){
    if (appData.savings == true) {
        let sum = +sumValue.value,
            percent = +percentValue.value;
   
       appData.monthIncome = sum/100/12 * percent;
       appData.yearIncome = sum/100 * percent;
   
       monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
       yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
   
       }
});


let appData = {
    budget:money,
    timeData:time,
    expenses:{},
    optionalExpenses:{},
    income:[],
    savings:false,
}
     

    
        







        

