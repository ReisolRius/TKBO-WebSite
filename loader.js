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

let img1 = document.querySelector('#left-img');
let img2 = document.querySelector('#right-img');


const id = setInterval(() => {
        wrapper.style.display = 'none';
        procent.textContent = proc;
        proc++;
}, 20);
setTimeout(() => {
    if (ran == 0) {
        funny_text.textContent = 'Никто не хочет сыграть в авокадо?';
        img1.src = 'img/hm1.png'
        img2.src = 'img/hm2.png'
    }
    else if (ran == 1) {
        funny_text.textContent = 'Автоматы в сделку не входили ©Историчка';
        img1.src = 'img/camera.png'
        img2.src = 'img/cameraman.png'
    }
    else if (ran == 2) {
        funny_text.textContent = 'Даша, вы записываете? ©Правовед';
        img1.src = 'img/clownleft.png'
        img2.src = 'img/clownright.png'
    }
    else if (ran == 3) {
        funny_text.textContent = 'Всмысле экзамен не на стромынке?';
        img1.src = 'img/gangsta.png'
        img2.src = 'img/darya.png'
    }
    else if (ran == 4) {
        funny_text.textContent = 'Ребят давайте отметим, кто в танки?';
        img1.src = 'img/ded.png'
        img2.src = 'img/toalet.png'
    }
    else if (ran == 5) {
        funny_text.textContent = 'Мяу.';
        img1.src = 'img/gigachad.png'
        img2.src = 'img/gigaleha.png'
    }
    else if (ran == 6) {
        funny_text.textContent = 'Да кто такой этот ваш Захар?';
        img1.src = 'img/hmmmmmmmmmmmmmmm1.png'
        img2.src = 'img/hmmmmmmmmmmmmmmm2.png'
    }
    else if (ran == 7) {
        funny_text.textContent = 'Назовите 3 основных ветви права';
        img1.src = 'img/jedays.png'
        img2.src = 'img/sith.png'
    }
    else if (ran == 8) {
        funny_text.textContent = 'кто помнит когда Егор появлялся в вузе последний раз?';
        img1.src = 'img/lehaleft.png'
        img2.src = 'img/leharight.png'
    }
    else if (ran == 9) {
        funny_text.textContent = 'С днём рожденья, Петя!';
        img1.src = 'img/mem1.png'
        img2.src = 'img/mem2.png'
    }
    else if (ran == 10) {
        funny_text.textContent = 'Почему Исус хочет 3D принтер?';
        img1.src = 'img/nekit1.png'
        img2.src = 'img/nekit2.png'
    }
    else if (ran == 11) {
        funny_text.textContent = 'Чем ИКБ лучше ИПТИП?';
        img1.src = 'img/hm1.png'
        img2.src = 'img/hm2.png'
    }
    else if (ran == 12) {
        funny_text.textContent = 'Волынская резня...1939?...что?';
        img1.src = 'img/camera.png'
        img2.src = 'img/cameraman.png'
    }
    else if (ran == 13) {
        funny_text.textContent = 'ИДЕАЛЬНАЯ ПОСЕЩАЕМОСТЬ И 0 ТОПИКОВ?!';
        img1.src = 'img/clownleft.png'
        img2.src = 'img/clownright.png'
    }
    else if (ran == 14) {
        funny_text.textContent = '2 часа туда... 2 часа обратно... и 1 пара...';
        img1.src = 'img/gangsta.png'
        img2.src = 'img/darya.png'
    }
    else if (ran == 15) {
        funny_text.textContent = 'Кто хочет взять доклад?';
        img1.src = 'img/ded.png'
        img2.src = 'img/toalet.png'
    }
    else if (ran == 16) {
        funny_text.textContent = 'Никто. Абсолютно никто. Банка пива на последней парте:"ПШшшшш.."';
        img1.src = 'img/gigachad.png'
        img2.src = 'img/gigaleha.png'
    }
    else if (ran == 17) {
        funny_text.textContent = 'Неудачный у тебя палец, Лёва';
        img1.src = 'img/hmmmmmmmmmmmmmmm1.png'
        img2.src = 'img/hmmmmmmmmmmmmmmm2.png'
    }
    else if (ran == 18) {
        funny_text.textContent = 'Мусульманское право?';
        img1.src = 'img/jedays.png'
        img2.src = 'img/sith.png'
    }
    else if (ran == 19) {
        funny_text.textContent = 'Мост на Стромынке? Склон на Вернандке? А может...дорога до Соколиной?';
        img1.src = 'img/lehaleft.png'
        img2.src = 'img/leharight.png'
    }
    else if (ran == 20) {
        funny_text.textContent = 'Здесь могла бы быть ваша цитата';
        img1.src = 'img/mem1.png'
        img2.src = 'img/mem2.png'
    }
    
}, 1);
setTimeout(() => {
    clearInterval(id);
    }, "2000");

setTimeout(() => {
    load.style.display = 'none';
    wrapper.style.display = 'block';
}, 3000);
