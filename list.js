let productList = [];

function addProduct() {
  productList = [];
  let productInput = document.getElementById('productInput');
  productList.push(productInput.value);
  productInput.value = '';

  for (let i = 0; i < productList.length; i++) {
    const productWrapper = document.createElement("div");
    const product = document.createElement("p");
    const image = document.createElement('img');
    const productText = document.createTextNode(productList[i]);

    image.src = './img/trash.svg';
    productWrapper.classList.add("product-wrapper");
    product.appendChild(productText);
    productWrapper.appendChild(product);
    productWrapper.appendChild(image);
    document.getElementById('addedProduct').appendChild(productWrapper);

    image.onclick = function () {
      productWrapper.remove();
    }
  }
}

