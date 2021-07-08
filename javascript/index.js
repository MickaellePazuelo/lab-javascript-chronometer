const chronometer = new Chronometer();

// get the buttons:
const btnLeftElement = document.getElementById('btnLeft');
const btnRightElement = document.getElementById('btnRight');


btnLeftElement.onclick = function () {
  btnLeftElement.classList.toggle('stop') 
  if(btnLeftElement.innerHTML ==='START') {
    setStopBtn();
    printSeconds();
  } else {
    setStartBtn();

  }
}

btnRightElement.onclick = function () {
  btnRightElement.classList.toggle('split') 
  if(btnRightElement.innerHTML === 'RESET') {
    setSplitBtn();
  }else {
    setResetBtn();
  }
}

// get the DOM elements that will serve us to display the time:
const minDecElement = document.getElementById('minDec');
const minUniElement = document.getElementById('minUni');
const secDecElement = document.getElementById('secDec');
const secUniElement = document.getElementById('secUni');
const milDecElement = document.getElementById('milDec');
const milUniElement = document.getElementById('milUni');
const splitsElement = document.getElementById('splits');

function printTime() {
  // ... your code goes here
}

function printMinutes() {
  return innerHTML.value = `${this.getMinutes()}`;
}

function printSeconds() {
  return secUniElement.innerHTML = chronometer.getSeconds();
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  // ... your code goes here
}

function clearSplits() {
  // ... your code goes here
}

function setStopBtn() {
  btnLeftElement.innerHTML = "STOP"
  
}

function setSplitBtn() {
  btnRightElement.innerHTML = "SPLIT"
}

function setStartBtn() {
  btnLeftElement.innerHTML = "START"
}

function setResetBtn() {
  btnRightElement.innerHTML = "RESET"
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  // ... your code goes here
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  // ... your code goes here
});
