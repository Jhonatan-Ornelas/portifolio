
///CARRINHO/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//abrir e fechar carrinho
function abrirCarrinho() {
    const abaCarrinho = document.getElementById('abaCarrinho');
    const fundoEscuro = document.getElementById('fundoEscuro');
    abaCarrinho.classList.add('aberto');
    fundoEscuro.classList.add('visivel');
}

function fecharCarrinho() {
    const abaCarrinho = document.getElementById('abaCarrinho');
    const fundoEscuro = document.getElementById('fundoEscuro');
    abaCarrinho.classList.remove('aberto');
    fundoEscuro.classList.remove('visivel');
}

//ADICIONAR O ITEM A O CARRINHO DE COMPRARS///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let list = document.querySelector('.container');
let listCard = document.querySelector('.list-card');
let body = document.querySelector('body');
let total = document.querySelector('.price');
let quantity = document.querySelector('.carrinho-quantidade');
let quantityTab = document.querySelector('.carrinho-quantidade-tab')



// let productsCart = [
//     {
//         id: 1,
//         name: 'PRODUCT NAME 1',
//         image: '/img/1.PNG',
//         price: 120000
//     },
//     {
//         id: 2,
//         name: 'PRODUCT NAME 2',
//         image: '/img/2.PNG',
//         price: 120000
//     },
//     {
//         id: 3,
//         name: 'PRODUCT NAME 3',
//         image: '/img/3.PNG',
//         price: 220000
//     },
//     {
//         id: 4,
//         name: 'PRODUCT NAME 4',
//         image: '/img/4.PNG',
//         price: 123000
//     },
//     {
//         id: 5,
//         name: 'PRODUCT NAME 5',
//         image: '/img/5.PNG',
//         price: 320000
//     },
//     {
//         id: 6,
//         name: 'PRODUCT NAME 6',
//         image: '/img/6.PNG',
//         price: 120000
//     }
// ];

// cria o card

// function initApp() {
//     productsCart.forEach((value, id) => {
//         let newDiv = document.createElement('div');
//         newDiv.classList.add('item');
//         newDiv.innerHTML = `
//     <img src="${value.image}">
//     <div class="title">${value.name}</div>
//     <div class="price">${value.price.toLocaleString()}</div>
//     <button onclick="addToCard(${id})">Add To Card</button>`;
//         list.appendChild(newDiv);
//     })
// }
// initApp();
//adiciona o card
let listCards = JSON.parse(localStorage.getItem('listCards')) || [];
let productMap = {};
productsCart.data.forEach((product, index) => {
    productMap[product.id] = index;
});

function addToCard(id) {
    if (productMap[id] === undefined) {
        console.log("Product with ID " + id + " does not exist.");
        return;
    }

    let productIndex = productMap[id];
    if (listCards[id] == null) {
        // copy product form list to list card
        listCards[id] = JSON.parse(JSON.stringify(productsCart.data[productIndex]));
        listCards[id].quantity = 1;
        localStorage.setItem('listCards', JSON.stringify(listCards));
    }
    reloadCard();
}
//atualiza o card
function reloadCard() {
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, id) => {
        if (value !== null) {
            totalPrice = totalPrice + value.priceP;
            count = count + value.quantity;

            let newDiv = document.createElement('li');
            newDiv.innerHTML = `<li class="product-card">
            <img src="${value.image}" alt="">
            <div class="product-card-info">
                <h4 class="product-card-name">${value.productName}</h4>
                <span class="product-card-price price-color">$${value.priceP.toLocaleString()}</span>
                <div class="product-card-quantidade">
                    <button class="product-quantity" onclick="changeQuantity(${id}, ${value.quantity - 1})">-</button>
                    <span >${value.quantity}</span>
                    <button class="product-quantity"  onclick="changeQuantity(${id}, ${value.quantity + 1})">+</button>
                </div>
            </div>
        </li>`;
            listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    if (count > 0) {
        quantity.innerText = count;
    } else {
        quantity.innerText = '';
    }
    quantityTab.innerText = count;
}

// inicialize totalQuantity
let totalQuantity = parseInt(localStorage.getItem('totalQuantity')) || 0;

//muda a quantidade de produtos
function changeQuantity(id, quantity) {
    let productIndex = productMap[id];
    if (quantity == 0) {
        delete totalQuantity[id]; // Remove a quantidade deste produto do total
        delete listCards[id];
    } else {
        // Atualiza a quantidade total
        totalQuantity[id] = quantity; // Atualiza a quantidade deste produto no total
        listCards[id].quantity = quantity;
        listCards[id].priceP = quantity * productsCart.data[productIndex].priceP;
    }
    // Atualiza o localStorage com a lista atualizada
    localStorage.setItem('listCards', JSON.stringify(listCards));
    // Salva a quantidade total no localStorage
    localStorage.setItem('totalQuantity', JSON.stringify(totalQuantity));
    reloadCard();
}

reloadCard();



//SEARCH /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



// selecione os elementos
const searchInput = document.querySelector('#search');
const searchButton = document.querySelector('#btn-click');
const resultsDiv = document.querySelector('#results');

// escute o evento de clique do botão
searchButton.addEventListener('click', function () {
    const searchValue = searchInput.value.trim().toLowerCase();

    // se a pesquisa não estiver vazia, redireciona para a página de resultados
    if (searchValue !== '') {
        window.location.href = '/html/resultados.html?pesquisa=' + encodeURIComponent(searchValue);

    }
});


// escuta o evento de input
searchInput.addEventListener('input', function () {
    const searchValue = this.value.trim().toLowerCase();

    // esconde a div de resultados se a pesquisa estiver vazia
    if (searchValue === '') {
        resultsDiv.style.display = 'none';
        return;
    } else {
        resultsDiv.style.display = 'block';
    }


});

function searchProducts(searchTerm) {
    searchTerm = searchTerm.toLowerCase();
    let matchedProducts = productsCart.data
        .filter(product =>
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

    return matchedProducts.slice(0, 8); // Retorna os 8 primeiros resultados
}

document.getElementById('search').addEventListener('input', function (e) {
    let searchTerm = e.target.value;
    let resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '';

    if (searchTerm.trim() !== "") { // Verifica se o campo de pesquisa não está vazio
        let results = searchProducts(searchTerm);
        results.forEach(product => {
            resultsDiv.innerHTML += `<a  href="/html/pagina-do-produto.html"><p class="search-product" data-product-id="${product.id}"  >${product.productName}</p></a>`;
        });
    }
});


//esconde a div quando clica fora do input
// escute o evento blur do input de pesquisa
searchInput.addEventListener('blur', function () {
    // esconde a div de resultados
    setTimeout(() => {
        resultsDiv.style.display = 'none';
    }, 300);

});


// escute o evento focus do input de pesquisa
searchInput.addEventListener('focus', function () {
    // mostra a div de resultados se a pesquisa não estiver vazia
    if (this.value.trim() !== '') {
        resultsDiv.style.display = 'block';
    }
});

//verifica qual item foi clicado
document.addEventListener('DOMContentLoaded', function () {
    const idClicado = document.querySelector("#results")

    idClicado.addEventListener('click', function (event) {
        // Verifique se o elemento clicado tem a classe 'search-product'
        if (event.target.classList.contains('search-product')) {
            let productId = event.target.getAttribute('data-product-id');
            localStorage.setItem('product-id', productId);
        }
    });
});

//PESQUISA QUANDO PRCIONA ENTER
searchInput.addEventListener('keydown', function (event) {
    const searchValue = this.value.trim().toLowerCase();
    if (event.keyCode === 13) { // 13 é o código da chave para Enter
        if (searchValue !== '') {
            // Faça a pesquisa aqui
            window.location.href = '/html/resultados.html?pesquisa=' + encodeURIComponent(searchValue);
        }
        // Impedir que o formulário seja submetido e a página seja recarregada
        event.preventDefault();
    } else {
        // se a pesquisa não estiver vazia, mostra a div de resultados
        if (searchValue !== '') {
            resultsDiv.style.display = 'block';
        } else {
            resultsDiv.style.display = 'none';
        }
    }
});

//informa qual categoria foi clicada no nav/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let categoryOpitions = document.querySelectorAll('.opitions');



let categoriaclicada = (event) => {
    window.location.href = `/html/loja.html?${encodeURIComponent(event.target.id)}`;
};

categoryOpitions.forEach((categoryOpition) => {
    categoryOpition.addEventListener('click', categoriaclicada);
});




