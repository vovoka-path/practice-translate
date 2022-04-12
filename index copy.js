import { data } from './data/data.js';
//import { card, setListeners } from './assets/js/set-listeners.js';

const nav = document.querySelectorAll('.header-nav-block-items')
const card = document.querySelector('.card')
const content = document.querySelector('.card-content')

let maxNumber;
let currentExpressionNumber;
const defaultCategory = 'presentsimple';
let dataCurrent = data[defaultCategory].expressions;
console.log(dataCurrent);

setMenuListeners();
setCardListener();

function setMenuListeners() {
  nav.forEach(item => {
    item.addEventListener('click', menuRoute)
  })

  function menuRoute(e) {
    dataCurrent= data[e.target.classList[1]].expressions;
    maxNumber = dataCurrent.length - 1;
    currentExpressionNumber = getRandomInt(maxNumber);

    console.log('currentExpressionNumber = ' + currentExpressionNumber);
  
    word.textContent = dataCurrent[currentExpressionNumber][1];
    menu();
  }

  function menu() {
    maxNumber = dataCurrent.length - 1;
    currentExpressionNumber = getRandomInt(maxNumber);
    start();
  }
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

// Card flip: RUS <-> ENG
const classFirstMenuItem = document.querySelector(".header-nav-block-item").classList[1];


function setCardListener() {
  card.addEventListener('click', wordToggle);

  console.log('currentExpressionNumber = ' + currentExpressionNumber);
  //console.log('dataCurrent = ' + dataCurrent[currentExpressionNumber][0]);

    // Card flip
    
}

function wordToggle() {
  card.classList.toggle('card-flip');
  content.classList.toggle('card-content-flip');

  if (word.textContent == dataCurrent[currentExpressionNumber][0]) {
    showRus();
  }
  else {
    showEng();
  }
}



// Start & Next
const word = document.querySelector('.card-content-word')
const btn = document.querySelector('.btn')

btn.addEventListener('click', start);

//setListeners();
// --- SWIPE ---
// https://www.npmjs.com/package/swipe-listener
let listener = SwipeListener(card);
card.addEventListener('swipe', swipeLeftForNext);

function swipeLeftForNext(e) {
  const directions = e.detail.directions;
  
  if (directions.left || directions.top) {
    console.log('Swiped left.');
    start();
  }
} 

// Functions


function start() {
  if (word.textContent == dataCurrent[currentExpressionNumber][0]) {
    currentExpressionNumber = getRandomInt(maxNumber);

    card.classList.toggle('card-flip');
    content.classList.toggle('card-content-flip');

    showRus();
  }
  else if (word.textContent == 'RUS' || word.textContent == dataCurrent[currentExpressionNumber][1]) {
    currentExpressionNumber = getRandomInt(maxNumber);

    word.textContent = dataCurrent[currentExpressionNumber][1];
  }
}

// First download
//menu();




function showRus() {
  word.classList.toggle('eng-show');
  word.textContent = dataCurrent[currentExpressionNumber][1];
}

function showEng() {
  word.classList.toggle('eng-show');
  word.textContent = dataCurrent[currentExpressionNumber][0];
}

// function next() {
//   current = getRandomInt(maxNumber);
//   word.classList.toggle('eng-show');
//   showRus();
// }

//elem.setAttribute(name, value)
