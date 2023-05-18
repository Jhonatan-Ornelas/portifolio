
// Selecione o elemento de resultados


// Obtenha o valor da pesquisa a partir da URL
const searchParams = new URLSearchParams(window.location.search);
let searchValue = decodeURIComponent(searchParams.get('pesquisa')).trim().toLowerCase();
console.log(searchValue)
// Filtrar os produtos com base no valor da pesquisa
let filteredProducts = productsCart.data.filter(product => {
    return product.productName.toLowerCase().includes(searchValue) ||
        product.category.toLowerCase().includes(searchValue);
});

// Função de pesquisa
function searchProducts(searchTerm) {
    searchTerm = searchTerm.toLowerCase();
    let matchedProducts = filteredProducts.filter(product =>
        product.productName.toLowerCase().includes(searchTerm) ||
        product.category.toLowerCase().includes(searchTerm)
    );

    // Classificar produtos com base em quão semelhante o nome do produto é ao termo de pesquisa
    matchedProducts.sort((a, b) => {
        let aName = a.productName.toLowerCase();
        let bName = b.productName.toLowerCase();
        let aIndex = aName.indexOf(searchTerm);
        let bIndex = bName.indexOf(searchTerm);
        if (aIndex === bIndex) {
            return 0;
        }
        if (aIndex === -1) {
            return 1;
        }
        if (bIndex === -1) {
            return -1;
        }
        return aIndex - bIndex;
    });

    return matchedProducts.slice(0, 10); // Retorna os 10 primeiros resultados
}

// Exibir os resultados na página
function displayResults(products) {
    products.forEach(product => {
        // Create the card link
        let cardLink = document.createElement('a')
        cardLink.setAttribute('href', '/html/pagina-do-produto.html')
        cardLink.classList.add('cardlink')

        // Create the card
        let card = document.createElement('div');
        card.classList.add('card', product.category, );
        card.setAttribute('data-product-id', product.id);
        card.setAttribute('data-price', product.priceP);

        // Create the img container
        let imgContainer = document.createElement('div');
        imgContainer.classList.add('item-img');

        // Create the image tag
        let image = document.createElement('img');
        image.classList.add('item-img-promo')
        image.setAttribute('src', product.image);
        imgContainer.appendChild(image);

        // Add the img container to the card link
        cardLink.appendChild(imgContainer);

        // Create the description container
        let container = document.createElement('div');
        container.classList.add('description-item');

        // Create the product name element
        let name = document.createElement('p');
        name.classList.add('item-decricao');
        name.innerText = product.productName;
        container.appendChild(name);

        // Create the price element
        let price = document.createElement('p');
        price.classList.add('item-price');
        container.appendChild(price);

        // Create the first price span
        if (product.price != '') {
            let firstPrice = document.createElement('span')
            firstPrice.innerText = '$' + product.price;
            firstPrice.classList.add('promocao');
            price.appendChild(firstPrice);

            // Create the promotion text
            let promocao = document.createElement('p')
            promocao.classList.add('promoçao')
            promocao.innerText = 'PROMOÇÃO';
            cardLink.appendChild(promocao)
        }

        // Create the second price span
        let secondPrice = document.createElement('span');
        secondPrice.innerText = product.priceP;
        price.appendChild(secondPrice);

        // Create the shopping cart button
        let shoppingCart = document.createElement('button');
        shoppingCart.classList.add('item-shopping-cart');
        shoppingCart.setAttribute('onclick', `addToCard(${product.id})`);

        // Create the shopping cart image
        let shoppingCartImg = document.createElement('img');
        shoppingCartImg.setAttribute('src', '/img/shopping-cart-6.png');
        shoppingCart.appendChild(shoppingCartImg);

        // Add the shopping cart button and the description container to the card link
        cardLink.appendChild(shoppingCart);
        cardLink.appendChild(container);

        // Add the card link to the card
        card.appendChild(cardLink);

        // Add the card to the results div
        document.getElementById('produtos-cards').appendChild(card);
    });
}


// Inicialmente, exibe os 10 primeiros resultados
displayResults(searchProducts(searchValue));




