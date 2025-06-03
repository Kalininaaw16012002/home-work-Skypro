function guessTheNumber() {
    let randomNumber = Math.ceil(Math.random()*100);
    console.log(randomNumber);

    while(true){
        let userNumber = Number(prompt('Угадайте случайное число от 1 до 100'));

            if (userNumber > randomNumber) {
                alert('Ваше число больше загаднного, попробуйте еще');
            } else if (userNumber < randomNumber) {
                alert('Ваше число меньше загаднного, попробуйте еще');
            } else if (userNumber === randomNumber){
                alert('Поздравляем! Вы угадали! Загаданное число:' + randomNumber);
                break;
            } else {
                alert('Ввели что-то не то, попробуйте снова');
            }  
        }
}