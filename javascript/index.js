const chronometer = new Chronometer();

// get the buttons:
const btnLeftElement = document.getElementById('btnLeft');
const btnRightElement = document.getElementById('btnRight');


btnLeftElement.onclick = function () {
  if(btnLeftElement.className.value === 'btn start') {
    return this.chronometer = start ();
  }
  if (btnLeftElement.className === 'btn stop') {
    return this.chronometer = stop();
  }
  console.log(btnLeftElement);
}
btnRightElement.onclick = function () {
  if(btnRightElement.className.value === 'btn reset') {
    return this.chronometer = reset ();
  }
  if (btnRightElement.className === 'btn split') {
    return this.chronometer = split ();
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
  return innerHTML.value = `${this.getSeconds()}`;
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
  
  
}

function setSplitBtn() {
  // ... your code goes here
}

function setStartBtn() {
  // ... your code goes here
}

function setResetBtn() {
  // ... your code goes here
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  // ... your code goes here
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  // ... your code goes here
});
