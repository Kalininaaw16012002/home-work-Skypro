// 1 задание 
let i=0;

while (i<2){
    console.log('Привет');
    i++;
}

// 2 задание 
let j=1;

do {
   console.log(j);
   j++;
} while(j <= 5);

// 3 задание 
for (let i = 7; i <= 22; i++){
    console.log(i);
}

// 4 задание 
const obj = {
   Коля: 200,
   Вася: 300,
   Петя: 400
}

for (let key in obj) {
   console.log(`${key} - ${obj[key]}`);
}

// 5 задание
n = 1000;
num = 0;

while (n>=50){
    n/=2;
    num++;
}

console.log('Результат: ' + n);
console.log('Кол-во итераций: ' + num);

// 6 задание
let firstFriday = Number(prompt('Введите число первой пятницы'));

do {
    console.log(`Сегодня пятница, ${firstFriday}-е число. Необходимо подготовить отчет`);
    firstFriday +=7;
} while (firstFriday <32);

// 1 доп задание
k = 100;
iterations = 0;

while (k>=0){
    k-=7;
    iterations++;
}

console.log('Результат: ' + k);
console.log('Кол-во итераций: ' + iterations);

// 2 доп задание
let month = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
number = 1;

for (let i = 0; i < month.length; i++) {  
    console.log(month[i] + ' ' + number);   
    number++;
}  

// 3 доп задание
const object = {
   Название: "Ведьмак",
   Автор: "Андрей Сапковский",
   "Год издания": 2022,
   Жанр: "фантастика"
}

for (let key in object) {
   console.log(`${key} - ${object[key]}`);
}

// 4 доп задание
const array = Array.from({ length: 10 }, () => Math.floor(Math.random() * 50));
console.log(array);

let minimum = array[0];
for (let i of array) {
  if(i < minimum) {
    minimum = i; 
  }
}
console.log(minimum); 