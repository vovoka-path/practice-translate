import { data } from "./data/data.js";
import { info } from "./data/info.js";

const card = document.querySelector(".card");
const word = document.querySelector(".card-content-word");

let maxNumber;
let currentExpressionNumber;
let currentData;

//******** Execute functions calls **********

setMenuListeners();
setButtonListener();
setCardListener();
setSwipeListener();

startWithDefaultCategory();

//******** Main Functions **********

function setMenuListeners() {
  const nav = document.querySelectorAll(".header-nav-block-items");

  nav.forEach((item) => {
    item.addEventListener("click", setCategory);
  });
}

function setButtonListener() {
  const btn = document.querySelector(".btn");

  btn.addEventListener("click", showNextExpression);
}

function setCardListener() {
  card.addEventListener("click", switchLanguages);
}

function setSwipeListener() {
  // https://www.npmjs.com/package/swipe-listener

  let listener = SwipeListener(card);
  card.addEventListener("swipe", swipeToNext);

  function swipeToNext(e) {
    const directions = e.detail.directions;

    if (directions.left || directions.top) {
      showNextExpression();
    }
  }
}

function startWithDefaultCategory() {
  const classFirstInMenuItem = document.querySelector(".header-nav-block-item")
    .classList[1];
  currentData = data[classFirstInMenuItem].expressions;
  maxNumber = currentData.length - 1;
  currentExpressionNumber = getRandomInt(maxNumber);
  word.textContent = currentData[currentExpressionNumber][1];
}

//******** Additional Functions **********

function setCategory(e) {
  const secondClassInMenuItem = e.target.classList[1];
  const isWrongClick = e.target.classList[0] === "header-nav-block-items";
  //console.log('e.target.classList = ' + e.target.classList[0]);

  if (secondClassInMenuItem === "info-button") {
    toggleInfo();
  } else if (!isWrongClick) {
    const h1 = document.querySelector(".category-h1");
    h1.innerHTML = data[secondClassInMenuItem].category + ":";

    currentData = data[secondClassInMenuItem].expressions;
    maxNumber = currentData.length - 1;
    currentExpressionNumber = getRandomInt(maxNumber);
    word.textContent = currentData[currentExpressionNumber][1];

    showNextExpression();
  }
}

function toggleInfo() {
  const infoElement = document.querySelector(".section-info");
  const infoText = infoElement.querySelector(".info-text");

  if (infoElement.classList.contains('info-none')) {
    console.log('speech = ' + currentData[currentExpressionNumber][0]);

    // let synth = window.speechSynthesis;
    // var utterThis = new SpeechSynthesisUtterance(currentData[currentExpressionNumber][0]);
    // synth.speak(utterThis);

    // speechSynthesis.speak(new SpeechSynthesisUtterance(currentData[currentExpressionNumber][0]));

    var msg = new SpeechSynthesisUtterance();
    msg.volume = 0.5; // From 0 to 1
    msg.text = currentData[currentExpressionNumber][0];
    window.speechSynthesis.speak(msg);

    // window.utterances = [];
    // var utterance = new SpeechSynthesisUtterance( 'hello' );
    // utterances.push( utterance );
    // speechSynthesis.speak( utterance );

    // speak(currentData[currentExpressionNumber][0], )

    // console.log("utterance", utterThis);
    // synth.speak(utterThis);
  }

  infoText.innerHTML = info;
  infoElement.classList.toggle("info-none");
}

function speak( text, onend ) {
  window.speechSynthesis.cancel();
  var ssu = new SpeechSynthesisUtterance( text );
  window.speechSynthesis.speak( ssu );
  function _wait() {
    if ( ! window.speechSynthesis.speaking ) {
      onend();
      return;
    }
    window.setTimeout( _wait, 200 );
  }
  _wait();
}

function showNextExpression() {
  const prevExpression = currentData[currentExpressionNumber];

  currentExpressionNumber = getRandomInt(maxNumber);

  if (word.textContent == prevExpression[0]) {
    flipCard();
    showRus();
  } else if (
    word.textContent == "RUS" ||
    word.textContent == prevExpression[1]
  ) {
    word.textContent = currentData[currentExpressionNumber][1];
  }
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function switchLanguages() {
  const isEng = word.textContent === currentData[currentExpressionNumber][0];

  if (isEng) {
    showRus();
  } else {
    showEng();
  }

  flipCard();
}

function flipCard() {
  const content = document.querySelector(".card-content");

  card.classList.toggle("card-flip");
  content.classList.toggle("card-content-flip");
}

function showRus() {
  word.classList.toggle("eng-show");
  word.textContent = currentData[currentExpressionNumber][1];
}

function showEng() {
  word.classList.toggle("eng-show");
  word.textContent = currentData[currentExpressionNumber][0];
}
