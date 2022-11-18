let weekdays = [
  'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'
]

function addZero(unitOfTime){
  return unitOfTime = (unitOfTime < 10) ? '0' + unitOfTime : unitOfTime;
}

setInterval(function getCurrentDate() {
  currentTime = new Date();
  hours = currentTime.getHours();
  minutes = currentTime.getMinutes();
  addZero(hours);
  addZero(minutes);
  document.getElementById("weekday").innerHTML = weekdays[currentTime.getDay()];
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
}, 200)
