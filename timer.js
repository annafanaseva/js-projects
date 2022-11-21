let seconds = 0;
let milliseconds = 0;
let minutes = 0;
let interval;
const lapBox = document.getElementById("lap-wrapper");

function clearFields() {
  seconds = 0;
  milliseconds = 0;
  minutes = 0;
  document.getElementById("milliseconds").innerHTML = addZero(milliseconds);
  document.getElementById("seconds").innerHTML = addZero(seconds);
  document.getElementById("minutes").innerHTML = addZero(minutes);
  lapBox.innerHTML = '';
}

clearFields();

function addZero(unitOfTime) {
  return unitOfTime = (unitOfTime < 10) ? '0' + unitOfTime : unitOfTime;
}

function getMilliseconds(milliseconds, seconds, minutes) {
  return milliseconds = milliseconds + 100 * (seconds + minutes * 60);
}

function startStopwatch() {
  interval = setInterval(function () {
    milliseconds += 1;

    if (milliseconds === 100) {
      seconds++;
      document.getElementById("seconds").innerHTML = addZero(seconds);
      milliseconds = 0;
    }

    if (seconds === 60) {
      minutes++;
      document.getElementById("minutes").innerHTML = addZero(minutes);
      seconds = 0;
    }

    if (minutes === 60) {
      clearInterval(interval);
    }

    document.getElementById("milliseconds").innerHTML = addZero(milliseconds);
  }, 10)
}

function pauseStopwatch() {
  clearInterval(interval);
}

function clearStopwatch() {
  clearInterval(interval);
  clearFields();
}

function countLap() {
  const lap = document.createElement("p");
  const lapWrapper = document.createTextNode(`${minutes} : ${seconds}, ${milliseconds}`);
  lap.appendChild(lapWrapper);
  lapBox.appendChild(lap);
}
