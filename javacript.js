// let someObjeck = {
//     name: "Joni",
//     age: 20,
//     hight: "178cm",
// }
// someObjeck.bool = true;
// someObjeck.cars = {audi:"red",
//                 BMW:"black",
//                 KIA:"white",
// }
// for (let key in someObjeck){
//     console.log(" свoйство " +  key  +  " -" + " имеет значение " + (someObjeck[key]))
// }

// console.log(Object.keys(someObjeck).length)
    
// let arr = ["first",1,2,3,"four",5];

// for( let i =0; i < arr.length; i++){
//     console.log(arr[i])
// }

// arr.forEach(function(item,index,array){
//     console.log(index + " : " + item + "(массив:" + array + ')')
// })

// let mass = [1,3,4,5,8];

// for (let keys of mass){ // покажет значение ,а если in -то покажет ключ 
//     console.log(keys)
// }

// let ans = prompt('', ''),
//     arr = [];

// arr = ans.split(',');//переводит строку в массив
// console.log(arr);

// let array = ["ffg","gmmh","sssd","kuy"];
// newArr = array.join("+");// переводит массив в строку
// console.log(newArr)

// let arr = ["fjfj","bkd","kjiiu","ssss","aasa"];
// newArr = arr.sort(); // выстраивает по алфавиту строки
//  console.log(arr)

// let arr = [2,8,97,35,1,4,68,5];
// arr.sort(function(a,b){
//     return b - a;
// })
// console.log(arr)

//OOП

// let soldier = {
//     health:400,
//     armor: 200,
// }
// let John = {
//     health:100
// };

// John.__proto__= soldier;//теперь John является прототипом soldier

// console.log(John);
// console.log(John.armor);

//



// 
// let num = 30;
// while (num < 36) {
//     console.log(num);
//     num++;
// }

// do {
//     console.log(num);
//     num++;
// }
// while( num < 36);


// for(let i = 1; i < 8; i++) {
//     if (i == 4){
//         continue;
//     }
//     console.log(i)
// }
//
// let money, time;

// function start (){
//     money = + prompt("Ваш бюджет на месяц?", "");
//     time = prompt("Введите дату в формате YYYY-MM-DD", '');

//     while(isNaN(money) || money == "" || money == null){
//         money = + prompt("Ваш бюджет на месяц?", "");
//     }
// }
// start();

// let appData = {
//     budget:money,
//     timeData:time,
//     expenses:{},
//     optionalExpenses:{},
//     income:[],
//     savings:true,
// };
//  function chooseExpenses (){
//     for (let i = 0;i < 2; i++) {
//         let a = prompt("Введите обязательную статью расходов в этом месяце");
//             b = prompt("Во сколько обойдется?");
//              if ((typeof(a)) === "string" && (typeof(a)) != null && (typeof(b)) != null 
//              && a != '' && b != "" && a.length < 40){
//                 appData.expenses[a] = b;
//              } else {
//                  alert("что-то пошло не так")
//              }
//      }
     
//  }
//  chooseExpenses();
    
    
//  function derectDayBudget () {
//     appData.moneyPerDay = Math.floor((appData.budget / 30)*100)/100;
//     alert("Ежедневно бюджет: " + appData.moneyPerDay);
//  }
//  derectDayBudget ();
 

//    function derectLevel (){
//     if (appData.moneyPerDay < 100){
//         alert("Минимальный доход");
//     } else if (appData.moneyPerDay >200 && appData.moneyPerDay < 2000){
//         alert("Средний доход");
//     } else if (appData.moneyPerDay > 2000 && appData.moneyPerDay < 80000){
//         alert ("выше среднего доход")
//     }else {
//         alert ("произошла ошибка")
//     }
//    };
//    derectLevel ();
   

//    function checkSavings (){
//       if(appData.savings == true){
//           let save = +prompt("Какова сумма накоплений?"),
//               persent = +prompt("Под какой процент?");

//               appData.monthIncome = save/100/12 * persent;
//               alert("Доход в месяц с вашего депозида : " + appData.monthIncome);
//       }
//    }
//    checkSavings();


//    function chooseOptExpenses(){
//        for ( let i = 1;i < 4; i++) {
//            let quectionOptionalExpenses = + prompt ("Статья необязательных расходов");
//            appData.optionalExpenses [i]=quectionOptionalExpenses;
//            console.log(appData.optionalExpenses);
//        }
//    };
//    chooseOptExpenses();


   // callback function 

   function learn (length,callback){
       console.log("Я учу " + length);
       callback();
   }
   function done (){
       console.log("Я очень стараюсь и скоро выучу!!")
   };
   learn("Програмирование JS", done);