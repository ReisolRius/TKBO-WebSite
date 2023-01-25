let procent = document.querySelector('#percent');
let line = document.querySelector('#line');
let proc = 1;
let load = document.querySelector('.load-container');
let wrapper = document.querySelector('.wrapper');
let text = document.querySelector('.news-text');
let text_small = document.querySelector('.news-text-small');
let funny_text = document.querySelector('.under-loader');
let ran = Math.random()*20;
ran = Math.ceil(ran);
console.log(ran);

const id = setInterval(() => {
    wrapper.style.display = 'none';
    procent.textContent = proc;
    proc++;
}, 20);
setTimeout(() => {
    if (ran == 0) {
        funny_text.textContent = 'Никто не хочет сыграть в авокадо?';
    }
    else if (ran == 1) {
        funny_text.textContent = 'Автоматы в сделку не входили ©Историчка';
    }
    else if (ran == 2) {
        funny_text.textContent = 'Даша, вы записываете? ©Правовед';
    }
    else if (ran == 3) {
        funny_text.textContent = 'Всмысле экзамен не на стромынке?';
    }
    else if (ran == 4) {
        funny_text.textContent = 'Ребят давайте отметим, кто в танки?';
    }
    else if (ran == 5) {
        funny_text.textContent = 'Мяу.';
    }
    else if (ran == 6) {
        funny_text.textContent = 'Да кто такой этот ваш Захар?';
    }
    else if (ran == 7) {
        funny_text.textContent = 'Назовите 3 основных ветви права';
    }
    else if (ran == 8) {
        funny_text.textContent = 'кто помнит когда Егор появлялся в вузе последний раз?';
    }
    else if (ran == 9) {
        funny_text.textContent = 'С днём рожденья, Петя!';
    }
    else if (ran == 10) {
        funny_text.textContent = 'Почему Исус хочет 3D принтер?';
    }
    else if (ran == 11) {
        funny_text.textContent = 'Чем ИКБ лучше ИПТИП?';
    }
    else if (ran == 12) {
        funny_text.textContent = 'Волынская резня...1939?...что?';
    }
    else if (ran == 13) {
        funny_text.textContent = 'ИДЕАЛЬНАЯ ПОСЕЩАЕМОСТЬ И 0 ТОПИКОВ?!';
    }
    else if (ran == 14) {
        funny_text.textContent = '2 часа туда... 2 часа обратно... и 1 пара...';
    }
    else if (ran == 15) {
        funny_text.textContent = 'Кто хочет взять доклад?';
    }
    else if (ran == 16) {
        funny_text.textContent = 'Никто. Абсолютно никто. Банка пива на последней парте:"ПШшшшш.."';
    }
    else if (ran == 17) {
        funny_text.textContent = 'Неудачный у тебя палец, Лёва';
    }
    else if (ran == 18) {
        funny_text.textContent = 'Мусульманское право?';
    }
    else if (ran == 19) {
        funny_text.textContent = 'Мост на Стромынке? Склон на Вернандке? А может...дорога до Соколиной?';
    }
    else if (ran == 20) {
        funny_text.textContent = 'Здесь могла бы быть ваша цитата';
    }
    
}, 1);
setTimeout(() => {
    clearInterval(id);
    }, "2000");

setTimeout(() => {
    load.style.display = 'none';
    wrapper.style.display = 'block';
}, 3000);

let open = document.querySelector('#open');
let close = document.querySelector('#close');
let menu = document.querySelector('.header');

open.addEventListener('click', Open, false);
close.addEventListener('click', Close, false);

function Open() {
    menu.style.height = '310px';
    menu.style.transform = 'translateX(0px)';
    open.style.display = 'none';
}

function Close() {
    menu.style.height = '0px';
    menu.style.transform = 'translateX(-300px)';
    open.style.display = 'block';
}