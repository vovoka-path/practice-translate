import { category, data } from './data/present-simple.js';

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

// --- SWIPE ---
// https://www.npmjs.com/package/swipe-listener
let listener = SwipeListener(card);
card.addEventListener('swipe', swipeLeftForNext);

function swipeLeftForNext(e) {
  var directions = e.detail.directions;
  
  if (directions.left || directions.top) {
    console.log('Swiped left.');
    start();
  }

} 

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

// First download
menu();

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

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

function showRus() {
  word.classList.toggle('eng-show');
  word.textContent = data[current][1];
}

function showEng() {
  word.classList.toggle('eng-show');
  word.textContent = data[current][0];
}

// function next() {
//   current = getRandomInt(maxNumber);
//   word.classList.toggle('eng-show');
//   showRus();
// }

//elem.setAttribute(name, value)





