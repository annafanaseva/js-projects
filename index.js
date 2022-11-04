let index = 0;

function slideImg(i) {
  index += i;

  let imgs = document.getElementsByClassName("img");
  let dots = document.getElementsByClassName("dot");

  for (let i = 0; i < imgs.length; i++) {
    imgs[i].className = "img hidden";
    dots[i].className = "dot";
  }

  if (index > imgs.length - 1 || index < 0) {
    index = 0;
  }

  if (index <= imgs.length - 1) {
    imgs[index].className = "img main";
    dots[index].className += " active";
    console.log(dots[index].className);
  }
}

slideImg(index);

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


