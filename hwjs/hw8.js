// 1 задание 
const peoples = [
   { name: 'Глеб', age: 29 },
   { name: 'Анна', age: 17 },
   { name: 'Олег', age: 7 },
   { name: 'Оксана', age: 47 }
];

console.log(peoples.sort((a, b) => a.age - b.age));

// 2 задание
function isPositive(number) {
    return number > 0;
}
function isMale(person) {
    return person.gender === 'male';
}
function filter(arr, ruleFunction) {
    const array = [];
    for (let i = 0; i < arr.length; i++) {
        if (ruleFunction(arr[i])) {
            array.push(arr[i])
        }      
    }
    return array;
}

console.log(filter([3, -4, 1, 9], isPositive));

const people = [
   {name: 'Глеб', gender: 'male'},
   {name: 'Анна', gender: 'female'},
   {name: 'Олег', gender: 'male'},
   {name: 'Оксана', gender: 'female'}
];

console.log(filter(people, isMale));

// 3 задание
const interval = setInterval(() => {
    console.log(new Date());
}, 3000);

setTimeout(() => {
clearInterval(interval);
    console.log('30 секунд прошло')
}, 30000);

// 4 задание
function delayForSecond(callback) {
    setTimeout(callback, 1000);
}

delayForSecond(function () {
   console.log('Привет, Глеб!');
})

// 5 задание
function delayForSecond(cb) {
    setTimeout(() => {
        console.log('Прошла одна секунда');
        if(cb) {  cb(); }
    }, 1000)
}

function sayHi (name) {
    console.log(`Привет, ${name}!`);
}

delayForSecond(() => sayHi('Глеб'));

