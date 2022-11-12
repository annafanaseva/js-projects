let productList = [];

function addProduct() {
  productList = [];
  let productInput = document.getElementById('productInput').value;
  document.getElementById('productInput').value = '';
  productList.push(productInput);
  if (productList) {
    for (let i = 0; i < productList.length; i++) {
      document.getElementById('addedProduct').innerHTML += productList[i] + '<br>';
    }
  }
}

function deleteProduct() {
  productList = [];
  document.getElementById('addedProduct').innerHTML = '';
}
