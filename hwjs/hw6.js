// 1 задание
const numbers = [1, 5, 4, 10, 0, 3];

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
   if (numbers[i] == 10) break;
}

// 2 задание
const array = [1, 5, 4, 10, 0, 3];

console.log(array.lastIndexOf(4));

// 3 задание
const arr = [1, 3, 5, 10, 20];

console.log(arr.join(" "));

// 4 задание
let matrix = [];

for (let i = 0; i < 3; i++) {
  matrix[i] = [];
  for (let j = 0; j < 3; j++) {
    matrix[i][j] = 1;
  }
}

console.log(matrix);

// 5 задание
let arrayNumber = [1, 1, 1];
arrayNumber.push(2, 2, 2);
console.log(arrayNumber);

// 6 задание
let arraySort = [9, 8, 7, 'a', 6, 5];
arraySort.sort();
arrayPop = arraySort.pop();
console.log(arraySort);

// 7 задание
let userArray = [9, 8, 7, 6, 5];
let userNumber = Number(prompt('Назови число'));

if (userArray.includes(userNumber) === true) {
        alert('Угадал');
    } else {
        alert('Не угадал');
}

// 8 задание
let text = 'abcdef';
console.log(text);
let splitText = text.split('');
console.log(splitText);
let reversedText = splitText.reverse();
console.log(reversedText);
text = reversedText.join("");
console.log(text);

// 9 задание
const arraySpread = [
    [1, 2, 3],
    [4, 5, 6]
];

const arraySpreads = arraySpread.reduce(function(a, b) {
    return a.concat(b);
});

console.log(arraySpreads); 

// 10 задание
let arrRandom = []; 

for (let i = 0; i < 10; i++) { 
    arrRandom.push(Math.floor(Math.random() * 10) + 1); 
}

console.log(arrRandom); 

for (let i = 0; i < 9; i++) { 
    console.log(arrRandom[i] + arrRandom[i+1]);
}

// 11 задание
 function squareOfNumbers(numbers) {
  return numbers.map(number => number ** 2);
}

const result = squareOfNumbers([1, 2, 3, 4]); 
console.log(result);

// 12 задание
 function linesLength(lines) {
  console.log(lines);
  return lines.map(i => i.length);
}

const results = linesLength(['Стол', 'Диван', 'Кровать']); 
console.log(results);

// 13 задание
 function negativeNumbers(numbers) {
  return numbers.filter(number => number < 0);
}

const resultat = negativeNumbers([1, -2, 3, -4]); 
console.log(resultat);

// 14 задание
 function evenNumbers(numbers) {
  return numbers.filter(number => number % 2  == 0);
}

let arrayRandom = []; 

for (var i = 0; i < 10; i++) { 
    arrayRandom.push(Math.floor(Math.random() * 10) + 1); 
}
console.log(arrayRandom);
const resultats = evenNumbers(arrayRandom); 
console.log(resultats);

// 15 задание
 function arithmeticMean(numbers) {
  return numbers.reduce((total, number) => total + number, 0)
}

let numberRandom = []; 

for (let i = 0; i < 6; i++) { 
    numberRandom.push(Math.floor(Math.random() * 10) + 1); 
}
console.log(numberRandom);
const inTotal = arithmeticMean(numberRandom) / 6; 
console.log(inTotal);

