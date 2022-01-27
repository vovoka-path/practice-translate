import { category, data} from '/data/present-simple.js';

document.querySelector('.category').textContent = category;

console.log(category)

let maxNumber = data.length - 1;
let current;   // установите максимальное число

//console.log(maxNumber);
//console.log(data[maxNumber]);

const rus = document.querySelector('.rus')
const eng = document.querySelector('.eng')
const btn = document.querySelector('.btn')

showRus();

eng.addEventListener('click', showEng);
btn.addEventListener('click', btnToggle);


function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function showRus() {
  current = getRandomInt(maxNumber);
  rus.textContent = data[current][1];
  eng.textContent = '';
}
//showRus();

function showEng() {
  eng.textContent = data[current][0];
}
//showEng();

function btnToggle() {
  if (btn.textContent == 'SHOW in English!') {
    btn.textContent = 'NEXT>>';
    showEng();
  }
  else {
    btn.textContent = 'SHOW in English!';
    showRus();
  }

}
// -------------------------------
// document.getElementById('divA').textContent = 'This text is different!';
//

