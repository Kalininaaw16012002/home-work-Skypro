function guessTheNumber() {
    let randomNumber = Math.ceil(Math.random()*100);
    console.log(randomNumber);

    while(true){
        let userNumber = Number(prompt('Угадайте случайное число от 1 до 100'));
        if (userNumber === 0) {
            return; 
        }

        if (userNumber > randomNumber) {
            alert('Ваше число больше загаднного, попробуйте еще');
        } else if (userNumber < randomNumber) {
            alert('Ваше число меньше загаданного, попробуйте еще');
        } else if (userNumber === randomNumber){
            alert('Поздравляем! Вы угадали! Загаданное число:' + randomNumber);
            break;
        } else {
            alert('Ввели что-то не то, попробуйте снова');
        }  
    }
}

// простая арифметика
function simpleArithmetic() {
    function operationsMathematical() {
        let operations = ['+', '-', '/', '*'];
        let randomIndex = Math.floor(Math.random() * (operations.length - 1)); 
        let result = operations[randomIndex]; 
        return result;
    }

    function numbersRandom() {
        let randomNumber = Math.ceil(Math.random()*20);
        return randomNumber;
    }

    let firstNumber = numbersRandom();
    let operation = operationsMathematical();
    let secondNumber = numbersRandom();
    let userAnswer = "";
    let result = "";

    switch (operation) {
        case '+':
            userAnswer = Number(prompt(`Решите задачу, округлив до целого числа: ${firstNumber} + ${secondNumber}`))
            result = Math.round(firstNumber + secondNumber);
            break;
        case '-':
            userAnswer = Number(prompt(`Решите задачу, округлив до целого числа: ${firstNumber} - ${secondNumber}`))
            result = Math.round(firstNumber - secondNumber);
            break;
        case '*':
            userAnswer = Number(prompt(`Решите задачу, округлив до целого числа: ${firstNumber} * ${secondNumber}`))
            result = Math.round(firstNumber * secondNumber);
            break;
        case '/':
            userAnswer = Number(prompt(`Решите задачу, округлив до целого числа: ${firstNumber} / ${secondNumber}`))
            result = Math.round(firstNumber / secondNumber);
            break;     
    }

    if (result === userAnswer) {
        alert(`Все верно! Ответ: ${result}`);
    } else {
        alert('Неправильный ответ');
    }
}

// Переверни текст
function turnTheTextOver() {
    const userText = prompt('Введите текст');

    if (userText === null) {
        alert('Игра отменена');
    } else {
        const splitText = userText.split('');
        const reversedText = splitText.reverse();
        const text = reversedText.join("");
        alert(text);
    }
}

// Простая викторина
function ASimpleQuiz() {
    let correctAnswers = 0;
    const quiz = [
        {
            question: "Какой цвет небо?",
            options: ["1. Красный", "2. Синий", "3. Зеленый"],
            correctAnswer: 2 // номер правильного ответа
        },
        {
            question: "Сколько дней в неделе?",
            options: ["1. Шесть", "2. Семь", "3. Восемь"],
            correctAnswer: 2
        },
        {
            question: "Сколько у человека пальцев на одной руке?",
            options: ["1. Четыре", "2. Пять", "3. Шесть"],
            correctAnswer: 2
        }
    ];

    for (let i = 0; i < quiz.length; i++) {
        let userAnswer = Number(prompt(`Введите номер правильного ответа: \nВопрос: ${quiz[i].question} \nВарианты ответов: ${quiz[i].options}`));
        if (userAnswer === 0) {
            return; 
        }

        if (userAnswer === quiz[i].correctAnswer) {
            correctAnswers += 1;
        }     
    }

    alert(`Кол-во правильных ответов: ${correctAnswers}`)
}

// камень, ножницы, бумага
function rockPaperScissors() {
    function computerLine() {
        const array = ['камень', 'ножницы', 'бумага'];
        let randomIndex = Math.floor(Math.random() * array.length);
        console.log(array[randomIndex]);
        return array[randomIndex];       
    }

    function userAnswer() {
        let computerLines = computerLine(); 
        let userLine = prompt('Выберите: камень, ножницы или бумагу');
        let userLines = '';
        if (userLine === null) {
            alert ('Отмена игры')
        } else {
            let userLines = userLine.toLowerCase();
            alert(`Ваш выбор: ${userLines};\n Выбор компьютера: ${computerLines}`);
            console.log(userLines);
            if (userLines === computerLines) {
            alert('Ничья');
            } else if(userLines === 'камень' && computerLines === 'ножницы' || userLines === 'ножницы' && computerLines === 'бумага' || userLines === 'бумага' && computerLines === 'камень'){
                alert('Вы победили!');
            } else if ((computerLines === 'камень' && userLines === 'ножницы' || computerLines === 'ножницы' && userLines === 'бумага' || computerLines === 'бумага' && userLines === 'камень')){
                alert('Вы проиграли!');
            } else {
                alert('Введено неверно!')
            }
            console.log();
        }
    }
    userAnswer();
}

// генератор случайных цветов
function RandomColors() {
    const colors = '#' + Math.floor(Math.random() * 16777215).toString(16);
    const minGamesEl = document.querySelector('.mini-games__product_color');
    minGamesEl.style.backgroundColor = colors;
}
