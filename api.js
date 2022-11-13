function findPictures() {
  document.querySelector('.pictures-wrapper').replaceChildren();

  fetch('https://api.unsplash.com/search/photos?query=' + input.value + '&per_page=30&client_id=SouHY7Uul-OxoMl3LL3c0NkxUtjIrKwf3tsGk1JaiVo')
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      for (let i = 0; i <= 20; i++) {
        let image = document.createElement('img');
        image.src = data.results[i].urls.full;
        image.classList.add('picture');
        document.querySelector('.pictures-wrapper').appendChild(image);
      }
    });
}
