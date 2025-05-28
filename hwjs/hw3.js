// 1 задание
let password = 'пароль';
let userPassword = prompt('Введите ваш пароль: ');

if (password === userPassword) {
    console.log('Пароль введен верно');
} else {
    console.log('Пароль введен неправильно');
}

// 2 задание
let c = Number(prompt('Введите число: '));

(c>0 && c<10) ? console.log('верно') : console.log('неверно');

// 3 задание
let d = Number(prompt('Введите 1 число: '));
let e = Number(prompt('Введите 2 число: '));

(d>100 || e>100) ? console.log('верно') : console.log('неверно');

// 4 задание
let a = '2';
let b = '3';

a = Number(a);
b = Number(b);
alert(a+b);

// 5 задание
let monthNumber = Number(prompt('Введите месяц: '));

switch (monthNumber) {
    case 1:
        console.log('Зима');
        break;
    case 2:
        console.log('Зима');
        break;
    case 3:
        console.log('Весна');
        break;
    case 4:
        console.log('Весна');
        break;
    case 5:
        console.log('Весна');
        break;
    case 6:
        console.log('Лето');
        break;
    case 7:
        console.log('Лето');
        break;
    case 8:
        console.log('Лето');
        break;
    case 9:
        console.log('Осень');
        break;
    case 10:
        console.log('Осень');
        break;
    case 11:
        console.log('Осень');
        break;
    case 12:
        console.log('Зима');
        break;
    default:
        console.log('Введено что-то не то');
        break;
}

// 1 доп задание
let number = prompt('Пожалуйста, введите любое число');

if (isNaN(number)) {
  console.log('Нужно писать число!');
} else {
    if (number % 2 === 0) {
        alert('Число четное!');
    } else {
        alert('Число нечетное!');
    }
}

// 2 доп задание
let clientOS1 = Number(prompt('Пожалуйста, введите 0 или 1'));

if (clientOS1 === 0) {
    console.log('Установите версию приложения для iOS по ссылке');
} else  if (clientOS1 === 1) {
    console.log('Установите версию приложения для Android по ссылке');
} else {
    console.log('Некорректный ввод');
}   

// 3 доп задание
let clientOS2 = Number(prompt('Пожалуйста, введите 0 или 1'));
let phoneYear = Number(prompt('Пожалуйста, введите год производства телефона'));

if (clientOS2 === 0 && phoneYear >= 2015 ) {
    console.log('Установите версию приложения для iOS по ссылке');
} else  if (clientOS2 === 0 && phoneYear < 2015) {
    console.log('Установите облегченную версию приложения для iOS по ссылке');
} else  if (clientOS2 === 1 && phoneYear >= 2015) {
    console.log('Установите версию приложения для Android по ссылке');
} else  if (clientOS2 === 1 && phoneYear < 2015) {
    console.log('Установите облегченную версию приложения для Android по ссылке');
} else {
    console.log('Некорректный ввод');
}   