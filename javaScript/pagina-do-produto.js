
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
let productNameHOne = document.querySelector('.titulo')
let productPriceP = document.querySelector('.priceP')
function loadPage(id) {
  // find the product object with the matching id
  const product = productsCart.data.find((product) => product.id === id);
  //CRIA O NOME
  productNameHOne.innerText = `${product.productName}`
  //CRIA O PREÇO
  productPriceP.innerHTML += `<span class="desconto">${product.price}</span>${product.priceP}`
  //cria descriçao 1
  let producSpecs = product.specs
  accordionText.innerHTML = `<p>${producSpecs}</p>`
  //cria descriçao 2
  let producDescrcao = product.descricao
  imageProductDescription.innerHTML = `<p>${producDescrcao}</p>`
  //cria imagem
  let productImage = document.createElement('img')
  productImage.setAttribute('src', product.image)
  productImage.classList.add('productimg')
  imagemDescricao.appendChild(productImage)

}




function getProductId() {
  let productId = localStorage.getItem('product-id');
  return parseInt(productId); // convert string to number
}

let storedProductId = getProductId();



loadPage(storedProductId)

//dicionar ao carrinho

function adicionarCarrinho() {
  const quantity = document.getElementById('quantity').value;
  console.log('Quantidade:', quantity);

  // Adicione aqui o código para adicionar o produto ao carrinho com a quantidade especificada.
  addToCard(storedProductId)
  changeQuantity(storedProductId, parseInt(quantity))
}


function getRandomElements(arr, n) {
  let result = new Array(n);
  let len = arr.length;
  let taken = new Array(len);
  if (n > len)
    throw new RangeError("getRandomElements: more elements taken than available");
  while (n--) {
    let x = Math.floor(Math.random() * len);
    result[n] = arr[x in taken ? taken[x] : x];
    taken[x] = --len in taken ? taken[len] : len;
  }
  return result;
}

// Seleciona 10 produtos aleatórios
let randomProducts = getRandomElements(productsCart.data, 10);
//CRIA OS CARDS DE BAIXO

for (let i of randomProducts) {
  let cardlink = document.createElement('a')
  cardlink.setAttribute('href', '/html/pagina-do-produto.html')
  cardlink.classList.add('cardlink')
  //Create card
  let card = document.createElement('div');
  //card should have category and should stay hidden initially
  card.classList.add('card', i.category,);
  // Add data-product-id attribute
  card.setAttribute('data-product-id', i.id);
  // price atribute
  card.setAttribute('data-price', i.priceP);
  //img div
  let imgContainer = document.createElement('div');
  imgContainer.classList.add('item-img');
  //img tag
  let image = document.createElement('img');
  image.classList.add('item-img-promo')
  image.setAttribute('src', i.image);
  imgContainer.appendChild(image);
  cardlink.appendChild(imgContainer);
  //container
  let container = document.createElement('div');
  container.classList.add('description-item');
  // product name
  let name = document.createElement('p');
  name.classList.add('item-decricao');
  name.innerText = i.productName;
  container.appendChild(name);
  //price
  let price = document.createElement('p');
  price.classList.add('item-price')
  container.appendChild(price)
  //firstPrice
  if (i.price != '') {
    let firstPrice = document.createElement('span')
    firstPrice.innerText = '$' + i.price
    firstPrice.classList.add('promocao')
    price.appendChild(firstPrice)
    //promoçaoText
    let promocao = document.createElement('p')
    promocao.classList.add('promoçao')
    promocao.innerText = 'PROMOÇÃO'
    cardlink.appendChild(promocao)
  }

  //secondPrice
  let secondPrice = document.createElement('span')
  secondPrice.innerText = i.priceP
  price.appendChild(secondPrice)

  //shipping-cart
  let shippingCart = document.createElement('button')
  shippingCart.classList.add('item-shopping-cart')
  shippingCart.setAttribute('onclick', `addToCard(${i.id})`)
  let shippingCartImg = document.createElement('img')
  shippingCartImg.setAttribute('src', '/img/shopping-cart-6.png')
  shippingCart.appendChild(shippingCartImg)

  cardlink.appendChild(container)
  card.appendChild(shippingCart)
  card.appendChild(cardlink)
  document.getElementById('outras-opecoes').appendChild(card)

}

window.onload = function () {
  setTimeout(function () {

    let imgDescription = document.querySelector('.imagem-descricao')
    imgDescription.style.visibility = 'visible';
  }, 100);

};

//SCROLL carouselTwo//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let carousel = document.querySelector('.outras-opecoes')
firstImg = carousel.querySelectorAll(".card")[0];

arrowIcons = document.querySelectorAll(".btn-lateral");
let firstImgWidth = firstImg.clientWidth;//getting first img width & adding 1px margin value
let scrollWidth = carousel.scrollWidth - carousel.clientWidth;// getting max scrollable width
const tolerance = 5; // Valor de tolerância para a comparação

// const showHideIcons = () => {
//     // showing and prev/next icon according to scroll left value
//     arrowIcons[0].style.display = carousel.scrollLeft == 0 ? 'none' : 'block';
//     arrowIcons[1].style.display = Math.abs(carousel.scrollLeft - scrollWidth) <= tolerance ? 'none' : 'block';

// }

let resizeInterval = ''

const atulizeWidth = () => {
  // Limpa o intervalo anterior, caso exista
  if (resizeInterval) {
    clearInterval(resizeInterval);
  }

  // Coloque aqui o código que você deseja executar a cada 60 ms
  const repeatedFunction = () => {
    scrollWidth = carousel.scrollWidth - carousel.clientWidth;
    // scrollWidthTwo = carouselTwo.scrollWidth - carouselTwo.clientWidth;
  };

  // Define o novo intervalo
  resizeInterval = setInterval(repeatedFunction, 60);
}


const showHideIcons = () => {
  if (carousel.scrollLeft <= tolerance) {
    arrowIcons[0].style.color = 'transparent';
  } else {
    arrowIcons[0].style.color = 'black';
  }

  if (carousel.scrollLeft >= scrollWidth - tolerance) {
    arrowIcons[1].style.color = 'transparent';
  } else {
    arrowIcons[1].style.color = 'black';
  }
};

arrowIcons.forEach(icon => {
  icon.addEventListener("click", () => {
    //if clicked icon is left, reduce width value from the carousel scroll left else add to it
    carousel.scrollLeft += icon.id == "btn-left" ? -firstImgWidth : firstImgWidth;
    showHideIcons();
    setTimeout(() => showHideIcons(), 60);//calling shoeHideIcons after 60ms
  })
})

window.addEventListener('resize', atulizeWidth())


//ANIMAÇAO DO CARRINHO
let cartIcons = document.querySelectorAll('.item-shopping-cart');

cartIcons.forEach(function (cartIcon) {
    cartIcon.addEventListener('click', function (e) {
        e.target.classList.add('animate-swing');

        setTimeout(function () {
            e.target.classList.remove('animate-swing');
        }, 1000); // O tempo aqui deve ser igual ao tempo da animação
    });
});

// ENVIA PARA A PAGINA DO PRODUTO O ID CORRETO

document.addEventListener('DOMContentLoaded', function () {
  const idClicado = document.querySelectorAll('.card');

  idClicado.forEach(product => {
      product.addEventListener('click', function (event) {
          let productId = this.getAttribute('data-product-id');
          localStorage.setItem('product-id', productId);
      });
  });
});

