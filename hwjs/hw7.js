//  1 задание
let line = 'js';

console.log(line.toUpperCase());

//  2 задание 
function anArrayStartingFromTheSecondLine(arrays, lines) {
    arrays.forEach((array) => {
   if (array.toLowerCase().startsWith(lines.toLowerCase())) {
      console.log(array);
   }
});
}

const products = anArrayStartingFromTheSecondLine(['Хлеб Бородинский', 'Молоко Молочник', 'Коровка Молоко', 
'Груша Конференция', 'Молоко домашнее'], 'молоко');
console.log(products);

// 3 задание
let number = 32.58884;

console.log(Math.floor(number));
console.log(Math.ceil(number));
console.log(Math.round(number));

// 4 задание 
console.log(Math.min(52, 53, 49, 77, 21, 32));
console.log(Math.max(52, 53, 49, 77, 21, 32));

// 5 задание
function random() {
    return number = Math.floor(Math.random() * 10)
}

let result = random();
console.log(result);

// 6 задание 
function arrayOfRandomNumbers(numbers) {
    let arrRandom = [];
    for (let i = 0; i < numbers / 2; i++) { 
        arrRandom.push(Math.floor(Math.random() * numbers)); 
    }
    return arrRandom;
}

let results = arrayOfRandomNumbers(8);
console.log(results);


// 7 задание 
function randomNumbers(min, max) {
    return (Math.floor(Math.random() * (max - min + 1) + min));
}

let resul = randomNumbers(3, 7);
console.log(resul);

// 8 задание 
let currentDates = new Date();
console.log(currentDates);

// 9 задание
let myDate = new Date(); 

let daysAgo73 = new Date(myDate.setDate(myDate.getDate() + 73)); 
console.log(daysAgo73);

// 10 задание
const currentDate = new Date();
const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг",
"Пятница", "Суббота"];
const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
"Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
let fullDate = "Сегодня: " + currentDate.getDate() + " " + months[currentDate.getMonth()] + " " + currentDate.getFullYear() +" - " + days[currentDate.getDay()];
console.log(fullDate);
console.log('Время:', currentDate.toLocaleTimeString('ru-RU')); 