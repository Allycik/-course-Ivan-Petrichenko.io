 // Обьекты 

     
//  let objectCat = {
//     name: " Sonya",
//     age: 11,
//     anymal: "cat",
//     colors: {
//         eyes: "green",
//         wool: " grey"
//     }
// };

// let counter = 0;

// for (let key in objectCat) {
//     if( typeof(objectCat[key]) === "object") {
//         for (let i in objectCat[key]){
//             console.log(`Свойство ${i} имеет значение : ${objectCat[key][i]}`);
//         }
//     } else {
//         console.log (`Свойство ${key} имеет значение : ${objectCat[key]}`);
//         counter++;
//     }
// }
// console.log(counter);

// //деструктуризация :

// const {eyes, wool} = objectCat.colors;
// console.log(wool);

// // МЕТОДЫ ОБЬЕКТОВ 

// // 1 - Object.keys()
// console.log(Object.keys(objectCat).length) // покажет количество ключей в обьекте 


// МАССИВЫ 

//  Mетоды переборов массивов:

// let arr = [1, 5, 8, 9];
 
// //1 метод (удобен если нужно прервать перебор - brake или continue)
// for (let value of arr){
//     console.log(value);
// }

// // 2 метод перебора 

// for (let i = 0; i < arr.length;i++) {
//     console.log(arr[i])
// };

// // 3 метод перебора ForEach()

// arr.forEach(function(item, index, array){
//     console.log(`${index} : ${item} внутри массива ${array}`)
// })


// трансформирующие методы 
// метод MAP() - перебирает и модифицирует массив 

// метод filter() -отфильтровывает по критерию котор мы задаем




// метод split - формирут массив из строк 

// const str = prompt("", "");
// const res = str.split(",");
// console.log(res)

// метод join наоборот из массива формирует строку 

// const str = prompt("", "");
// const res = str.split(",");
// console.log(res.join(";"))

// метод sort 

// const str = prompt("", "");
// const res = str.split(",");
// res.sort();
// console.log(res.join(";"))



