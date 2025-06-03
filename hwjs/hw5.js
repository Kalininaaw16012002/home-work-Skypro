// 1 задание 
function minNumber(a, b) {
	if (a < b) {
		return a;
} else {
	return b;
	}
}

console.log(minNumber(4, 3)); 

// 2 задание
function isEven(number) {
	if (number % 2 === 0) {
		console.log('Число четное')
    } else {
	    console.log('Число нечетное')
	}
}

console.log(isEven(5));

// 3 задание
function square1(a) {
   console.log(a ** 2);
}

console.log(square1(5));


function square2(a) {
   return a ** 2;
}

let sqNumber = square2(6);
console.log(sqNumber);

// 4 задание
function age() {
    let userAge = Number(prompt('Сколько тебе лет?'));

    if (userAge >=0 && userAge <=12) {
        alert('Привет, друг!');
    } else if (userAge >=13 ) {
        alert('Добро пожаловать!');
    } else {
        alert('Вы ввели неправильное значение');
    }
}

age();

//5 задание
 function isNumber(a, b) {
    if (isNaN(a) || isNaN(b)) {
        return 'Одно или оба значения не являются числом';
    } else {
        return a*b;
    }
 }

 let isNumber2 = isNumber(3, 'cb');
 console.log(isNumber2);

// 6 задание
 function usNumber() {
    let n = Number(prompt('Назовите любое число?'));
    if (isNaN(n)) {
        return 'Переданный параметр не является числом';
    } else {
        return n + ' в кубе равняется ' + n**3;
    }
 }

 let userNamber = usNumber();
 console.log(userNamber);

// 7 задание
function getArea() {
   return 'Площадь круга: ' + (Math.PI * this.radius**2);
};

function getPerimeter() {
   return 'Периметр круга: ' + (2 * Math.PI * this.radius);
};

const circle1 = {
   radius: 10,
   getArea: getArea,
   getPerimeter: getPerimeter,
}

const circle2 = {
   radius: 5,
   getArea: getArea,
   getPerimeter: getPerimeter,
}

console.log(circle1.getArea());
console.log(circle1.getPerimeter());
console.log(circle2.getArea());
console.log(circle2.getPerimeter());
