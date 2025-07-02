// // 1 задание
const titleEl = document.querySelector('.title');
const buttonTitleEl = document.querySelector('.title-button');

buttonTitleEl.addEventListener('click', function() {
   if (titleEl.style.display === 'none') {
        titleEl.style.display = 'block'; // делаем элемент видимым
    } else {
        titleEl.style.display = 'none'; // скрываем элемент
    }
});

// 2 задание
const textEl = document.querySelector('.text');
const buttonTextEl = document.querySelector('.color-button');

buttonTextEl.addEventListener('click', function() {
   textEl.style.color = 'blue';
});

// 3 задание
const titleElem = document.querySelector('.title');
const buttonTextElem = document.querySelector('.text-button');

buttonTextElem.addEventListener('click', function() {
   titleElem.textContent = 'Привет, мир!';
});

// 4 задание
const paragraphs = document.querySelectorAll('.description');

paragraphs.forEach(description => {
   description.textContent = '"Измененный текст"';
});

// 5 задание
const paragr = document.querySelectorAll('.description');

paragr.forEach(description => {
   description.textContent = '"Новый текст"';
});

// 6 задание
const buttonNewElem = document.querySelector('.new-button');

buttonNewElem.addEventListener('click', function() {
    const newDiv = document.createElement('p');
    newDiv.textContent = 'Новый абзац';
    document.body.appendChild(newDiv);
});

// 7 задание
const titleElement = document.querySelector('.description');
const buttonElement = document.querySelector('.remow-button');

buttonElement.addEventListener('click', function() {
   titleElement?.remove();
});