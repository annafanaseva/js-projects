let weekdays = [
  'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'
]

setInterval(function getCurrentDate() {
  currentTime = new Date();
  hours = currentTime.getHours();
  minutes = currentTime.getMinutes();
  hours = (hours < 10) ? '0' + hours : hours;
  minutes = (minutes < 10) ? '0' + minutes : minutes;

  document.getElementById("weekday").innerHTML = weekdays[currentTime.getDay()];
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
}, 200)