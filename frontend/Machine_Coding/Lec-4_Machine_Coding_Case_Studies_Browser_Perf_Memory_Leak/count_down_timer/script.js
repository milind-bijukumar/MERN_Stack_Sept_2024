/**

   Real usecases:

     1. otp
     2. online tests
     3. mega sales going on in ecommerce websites
     4. movie booking apps
   

   Requirements:

     Must have features:

       - you have a timer in MM:SS
       - play and pause the timer
       - reset the timer values 00:00


     Good to have:

      - HH:MM:SS or DD:HH:MM:SS
      - input validation can be applied on each input fields
 */

// Implementation:
// ------------------

const minMSBInput = document.getElementById("minMSB");
const minLSBInput = document.getElementById("minLSB");
const secMSBInput = document.getElementById("secMSB");
const secLSBInput = document.getElementById("secLSB");

const display = document.getElementById("display");

const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const resetBtn = document.getElementById("reset");

let minutes = 0;
let seconds = 0;
let timerId = null;

const setDisplay = (minutes, seconds) => {
  minMSBInput.value = String(Math.floor(minutes / 10)).padStart(1, "0");
  minLSBInput.value = String(minutes % 10).padStart(1, "0");

  secMSBInput.value = String(Math.floor(seconds / 10)).padStart(1, "0");
  secLSBInput.value = String(seconds % 10).padStart(1, "0");
};

const setTime = () => {
  const minMSB = parseInt(minMSBInput.value) || 0;
  const minLSB = parseInt(minLSBInput.value) || 0;
  const secMSB = parseInt(secMSBInput.value) || 0;
  const secLSB = parseInt(secLSBInput.value) || 0;

  seconds = secMSB * 10 + secLSB; // 59 > seconds 50 + 9 = minMSB *10 = 50 + minLSB = 9 = 59
  minutes = minMSB * 10 + minLSB;
};

const resetTimer = () => {
  minMSBInput.value = "0";
  minLSBInput.value = "0";
  secMSBInput.value = "0";
  secLSBInput.value = "0";
};

const startTimer = () => {
  console.log("timer started");
  timerId = setInterval(() => {
    seconds--;
    //console.log(seconds);
    if (seconds < 0) {
      seconds = 59;
      minutes--;
    }

    if (minutes === 0 && seconds === 0) {
      onReset();
    }

    setDisplay(minutes, seconds);
  }, 1000);
};

const updateDisplay = (startStatus = false, stopStatus = false) => {
  minMSBInput.disabled = startStatus;
  minLSBInput.disabled = startStatus;
  secMSBInput.disabled = startStatus;
  secLSBInput.disabled = startStatus;
};

const updateControls = (startStatus = false, stopStatus = false) => {
  startBtn.disabled = startStatus;
  stopBtn.disabled = stopStatus;
};

const onStart = () => {
  console.log("onstart");
  // 1. setTime
  setTime();
  // 2. startTimer
  startTimer();
  // check condition for mins and seconds !==0
  //   3. updateDisplay
  updateDisplay(true);
  //   4. updateControls
  updateControls(true, false);
  //   5. Add trasparency in input box border
  display.classList.add("progress");
};

const onStop = () => {
  updateDisplay(false);
  updateControls(false, true);
  clearInterval(timerId);
  display.classList.remove("progress");

  timerId = null;
};

const onReset = () => {
  // 1. updateDisplay
  updateDisplay(false);
  // 2. updateControls
  updateControls(false, true);

  clearInterval(timerId);
  resetTimer();

  display.classList.remove("progress");

  timerId = null;
};

const onInput = () => {
  // validation for the each 4 input fields
  // do as in assignment
};

// Adding events listeners
startBtn.addEventListener("click", onStart);
stopBtn.addEventListener("click", onStop);
resetBtn.addEventListener("click", onReset);

display.addEventListener("input", onInput);
