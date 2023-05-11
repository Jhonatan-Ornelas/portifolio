
//acordeon
let accordionButtons = document.querySelectorAll(".accordion-button");

accordionButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    let accordionItem = button.parentNode;
    let accordionSymbol = button.querySelector(".accordion-symbol");

    if (accordionItem.classList.contains("open")) {
      accordionItem.classList.remove("open");
      accordionSymbol.textContent = "+";
      accordionSymbol.classList.remove("rotate");
    } else {
      let accordionItems = document.querySelectorAll(".accordion-item");
      accordionItems.forEach(function (item) {
        item.classList.remove("open");
        let symbol = item.querySelector(".accordion-symbol");
        symbol.textContent = "+";
        symbol.classList.remove("rotate");
      });

      accordionItem.classList.add("open");
      accordionSymbol.textContent = "-";
      accordionSymbol.classList.add("rotate");
    }
  });
});


//CARREGAMENTO DA PAGINA
 
let accordionText = document.querySelector('.accordion-texto')
let imageProductDescription = document.querySelector('.imagem-descricao-produto')
let imagemDescricao = document.querySelector('.imagem-descricao')

function loadPage(id) {
  // find the product object with the matching id
  const product = productsCart.data.find((product) => product.id === id);


  //cria descriçao 1
  let producSpecs = product.specs
  accordionText.innerHTML = `<p>${producSpecs}</p>`
  //cria descriçao 2
  let producDescrcao = product.descricao
  imageProductDescription.innerHTML = `<p>${producDescrcao}</p>`
  //cria imagem
  let productImage = document.createElement('img')
  productImage.setAttribute('src',product.image)
  imagemDescricao.appendChild(productImage)
  
}




function getProductId() {
  let productId = localStorage.getItem('product-id');
  return parseInt(productId); // convert string to number
}

let storedProductId = getProductId();



window.onload= () => loadPage(storedProductId)