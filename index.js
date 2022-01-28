import { category, data } from '/data/present-simple.js';

let maxNumber;
let current;

// Nav
const presentSimple = document.querySelector('.present-simple')
const h1 = document.querySelector('.category')

presentSimple.addEventListener('click', menu);
h1.addEventListener('click', menu);

// Card: RUS <-> ENG
const card = document.querySelector('.card')
const content = document.querySelector('.card-content')

card.addEventListener('click', wordToggle);

// Start & Next
const word = document.querySelector('.card-content-word')
const btn = document.querySelector('.btn')

btn.addEventListener('click', start);

// Functions
function menu() {
  document.querySelector('.category').textContent = category;
  maxNumber = data.length - 1;
  current = getRandomInt(maxNumber);

  start();

  presentSimple.classList.add('header-nav-block-item-active');
}

function start() {
  if (word.textContent == data[current][0]) {
    current = getRandomInt(maxNumber);

    card.classList.toggle('card-flip');
    content.classList.toggle('card-content-flip');

    showRus();
  }
  else if (word.textContent == 'RUS' || word.textContent == data[current][1]) {
    current = getRandomInt(maxNumber);

    word.textContent = data[current][1];
  }
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function showRus() {
  word.classList.toggle('eng-show');
  word.textContent = data[current][1];
}

function showEng() {
  word.classList.toggle('eng-show');
  word.textContent = data[current][0];
}

function next() {
  current = getRandomInt(maxNumber);
  word.classList.toggle('eng-show');
  showRus();
}

//elem.setAttribute(name, value)

function wordToggle() {
  card.classList.toggle('card-flip');
  content.classList.toggle('card-content-flip');

  if (word.textContent == data[current][0]) {
    showRus();
  }
  else {
    showEng();
  }
}

