//1 задание
let a = 10;
alert(a);
a = 20;
alert(a);

//2 задание
let yearOfRelease = 2007;
alert (`год создания первого айфона ` + yearOfRelease);

//3 задание
let creator = `Брендан Эйх`
alert (`Создатель JavaScript ` + creator);

//4 задание
let b = Number(10);
let c = Number(2);
alert (`Сумма ` + (c+b));
alert (`Разность ` +  (b-c));
alert (`Произведение ` + (b*c));
alert (`Частное ` + (b/c)); 

//5 задание
let result = 2**5;
alert(result);

//6 задание
a = 9;
b = 2;
alert(a%b);

//7 задание
let num=1;
num +=5;
num -=3;
num *=7;
num /=3;
num +=1;
num -=1;
alert(num);

//8 задание
let age = prompt(`Cколько вам лет?`);
alert(age);

//9 задание
const user = {
   name: 'Ася',
   age: 24,
   isAdmin: true 
}
console.log(user.name);

//10 задание
let name = prompt(`Назовите ваше имя:`);
alert (`Привет, ` + name);

//Доп задание
let number= prompt(`Назовите любое число:`);
numberNew1 = number * 2;
alert (numberNew1);
numberNew2 = numberNew1 +10;
alert (numberNew2);
numberNew3 = numberNew2 / 2;
alert (numberNew3);
numberNew4 = numberNew3 - number;
alert (numberNew4);
alert (`Ответ: ` + 5);