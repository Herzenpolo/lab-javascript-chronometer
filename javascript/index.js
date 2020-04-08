

const chronometer = new Chronometer();

// get the buttons:
const btnLeft = document.getElementById('btnLeft');
const btnRight = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
let minDec = document.getElementById('minDec');
let minUni = document.getElementById('minUni');
let secDec = document.getElementById('secDec');
let secUni = document.getElementById('secUni');
let milDec = document.getElementById('milDec');
let milUni = document.getElementById('milUni');
let splits = document.getElementById('splits');

function printTime() {
  // ... your code goes here
  minUni.innerText = chronometer.twoDigitsNumber(chronometer.getMinutes())[1]
  secUni.innerText = chronometer.twoDigitsNumber(chronometer.getSeconds())[1]
  secDec.innerText = chronometer.twoDigitsNumber(chronometer.getSeconds())[0]
}

function printMinutes() {
  // ... your code goes here
  
}

function printSeconds() {
  // ... your code goes here
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  // ... your code goes here
  let li = document.createElement(`li`)
  li.innerText = chronometer.splitClick()
  splits.appendChild(li)
}

function clearSplits() {
  // ... your code goes here
}

function setStopBtn() {
  // ... your code goes here
  btnLeft.className = `btn stop`
  btnLeft.innerHTML= `STOP`
}

function setSplitBtn() {
  // ... your code goes here
  btnRight.className = `btn split`
  btnRight.innerHTML= `SPLIT`
}

function setStartBtn() {
  // ... your code goes here
  btnLeft.className = `btn start`
  btnLeft.innerHTML= `START`
}

function setResetBtn() {
  // ... your code goes here
  btnRight.className = `btn reset`
  btnRight.innerHTML= `RESET`
}

// Start/Stop Button
btnLeft.addEventListener('click', () => {
  // ... your code goes here
  if(btnLeft.classList.contains("start")) {
    chronometer.startClick(printTime) // start the timer
    setStopBtn() // changing (aka toggle) the properties of the start button
    setSplitBtn()
  } else {
    chronometer.stopClick()
    setStartBtn()
    setResetBtn()
    chronometer.resetClick
  }

});

// Reset/Split Button
btnRight.addEventListener('click', () => {
  // ... your code goes here
  if(btnRight.classList.contains("reset")) {
    chronometer.resetClick()// reset clock
  } else { // the timer is running 
    printSplit()

  }
});


