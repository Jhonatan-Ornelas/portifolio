
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

