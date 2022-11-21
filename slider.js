let index = 0;
const pictureAmount = 10;
const sliderWrapper = document.getElementById("slider-wrapper");
const dotsWrapper = document.getElementById("dots");
let images = sliderWrapper.childNodes;
let dots = dotsWrapper.childNodes;

function setChildElem() {
  for (let i = 0; i <= pictureAmount; i++) {
    const image = document.createElement('img');
    const dot = document.createElement('div');

    dot.classList.add('dot');
    image.classList.add('hidden');

    sliderWrapper.appendChild(image);
    dotsWrapper.appendChild(dot);
  }
}

function getImg() {
  fetch('https://api.unsplash.com/search/photos?query=car&per_page=30&client_id=SouHY7Uul-OxoMl3LL3c0NkxUtjIrKwf3tsGk1JaiVo')
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      for (let i = 0; i <= pictureAmount; i++) {
        images[i].src = data.results[i].urls.full;
      }
    });
}

setChildElem();
getImg();

function slideImg(i) {
  index += i;
  for (let i = 0; i <= pictureAmount; i++) {
    images[i].className = "hidden";
    dots[i].className = "dot";
  }

  if (index > pictureAmount - 1 || index < 0) {
    index = 0;
  }

  if (index <= pictureAmount - 1) {
    console.log(index);
    images[index+1].className = "main";
    dots[index+1].className = "active";
  }
}

slideImg(index);
