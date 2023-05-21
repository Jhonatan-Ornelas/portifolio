
//HEADER

// This file controls the search, shopping cart, and checks which product was clicked.
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// CART
// Functions to open and close cart
// Get cart sidebar and dark overlay elements
const cartSidebar = document.querySelector('#cartSidebar');
const darkOverlay = document.querySelector('#darkOverlay');

// Open cart function
function openCart() {
    cartSidebar.classList.add('open');
    darkOverlay.classList.add('visible');
}

// Close cart function
function closeCart() {
    cartSidebar.classList.remove('open');
    darkOverlay.classList.remove('visible');
}



//ADD THE ITEM TO THE SHOPPING CART
let productList = document.querySelector('.container');
let cartList = document.querySelector('.cart-items-list');
let totalElement = document.querySelector('.total-price-display');
let cartQuantity = document.querySelector('.cart-quantity');
let cartQuantityTab = document.querySelector('.cart-quantity-display')

// Retrieve products from localStorage or initialize as empty
let cartProducts = JSON.parse(localStorage.getItem('cartProducts')) || [];
let productMap = {};

productsCart.data.forEach((product, index) => {
    productMap[product.id] = index;
});

// Function to add product to the cart
function addToCart(id) {
    if (productMap[id] === undefined) {
        console.log("Product with ID " + id + " does not exist.");
        return;
    }

    let productIndex = productMap[id];
    if (cartProducts[id] == null) {
        // Copy product form list to cart
        cartProducts[id] = JSON.parse(JSON.stringify(productsCart.data[productIndex]));
        cartProducts[id].quantity = 1;
        localStorage.setItem('cartProducts', JSON.stringify(cartProducts));
    }
    refreshCart();
}

// Function to update the cart
function refreshCart() {
    cartList.innerHTML = '';
    let count = 0;
    let totalCartValue = 0;
    cartProducts.forEach((value, id) => {
        if (value !== null) {
            totalCartValue = totalCartValue + value.priceP;
            count = count + value.quantity;

            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
            <li class="cart-item">
                <img class="cart-item-image" src="${value.image}" alt="">
                <div class="cart-item-info">
                    <h4 class="cart-item-title">${value.productName}</h4>
                    <span class="cart-item-price color-purple">$${value.priceP.toLocaleString()}</span>
                    <div class="cart-item-quantity">
                        <button class="quantity-decrease-btn quantity-btn" onclick="changeQuantity(${id}, ${value.quantity - 1})">-</button>
                        <span class="quantity-display" >${value.quantity}</span>
                        <button class="quantity-increase-btn quantity-btn" onclick="changeQuantity(${id}, ${value.quantity + 1})">+</button>
                    </div>
                </div>
            </li>`;
            cartList.appendChild(newDiv);
        }
    })
    totalElement.innerText = '$' + totalCartValue.toLocaleString();
    if (count > 0) {
        cartQuantity.innerText = count;
    } else {
        cartQuantity.innerText = '';
    }
    cartQuantityTab.innerText = count;
}

// Initialize totalQuantity
let totalQuantity = parseInt(localStorage.getItem('totalQuantity')) || 0;

// Function to change product quantity
function changeQuantity(id, quantity) {
    let productIndex = productMap[id];
    if (quantity == 0) {
        delete totalQuantity[id]; // Remove quantity of this product from total
        delete cartProducts[id];
    } else {
        // Update total quantity
        totalQuantity[id] = quantity; // Update quantity of this product in total
        cartProducts[id].quantity = quantity;
        cartProducts[id].priceP = quantity * productsCart.data[productIndex].priceP;
    }
    // Update localStorage with updated list
    localStorage.setItem('cartProducts', JSON.stringify(cartProducts));
    // Save total quantity to localStorage
    localStorage.setItem('totalQuantity', JSON.stringify(totalQuantity));
    refreshCart();
}

// Load cart initially
refreshCart();


//SEARCH////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// select elements
const searchInputEl = document.querySelector('#search');
const searchButtonEl = document.querySelector('.btn-search');
const resultsDivEl = document.querySelector('#results');


// listen for input event
searchInputEl.addEventListener('input', function () {
    const searchValue = this.value.trim().toLowerCase();

    // hide results div if search is empty
    if (searchValue === '') {
        resultsDivEl.style.display = 'none';
        return;
    } else {
        resultsDivEl.style.display = 'block';
    }

});


//search products end show the top 8 results
function searchProducts(searchTerm) {
    searchTerm = searchTerm.toLowerCase();
    let matchedProducts = productsCart.data
        .filter(product =>
            product.productName.toLowerCase().includes(searchTerm) ||
            product.category.toLowerCase().includes(searchTerm)
        );

    // Sort products based on how similar the product name is to search term
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

    return matchedProducts.slice(0, 8); // Return top 8 results
}

//identify the value of the input
searchInputEl.addEventListener('input', function (e) {
    let searchTerm = e.target.value;
    resultsDivEl.innerHTML = '';

    if (searchTerm.trim() !== "") { // Check if search field is not empty
        let results = searchProducts(searchTerm);
        results.forEach(product => {
            resultsDivEl.innerHTML += `<a  href="/html/pagina-do-produto.html"><p class="search-product" data-product-id="${product.id}"  >${product.productName}</p></a>`;
        });
    }
});

// Hide the div when click outside the input
// listen for input blur event
searchInputEl.addEventListener('blur', function () {
    // hide results div
    setTimeout(() => {
        resultsDivEl.style.display = 'none';
    }, 300);
});

// listen for input focus event
searchInputEl.addEventListener('focus', function () {
    // show results div if search is not empty
    if (this.value.trim() !== '') {
        resultsDivEl.style.display = 'block';
    }
});

// Check which item was clicked
document.addEventListener('DOMContentLoaded', function () {
    const clickedIdEl = resultsDivEl;

    clickedIdEl.addEventListener('click', function (event) {
        // Check if the clicked element has the class 'search-product'
        if (event.target.classList.contains('search-product')) {
            let productId = event.target.getAttribute('data-product-id');
            localStorage.setItem('product-id', productId);
        }
    });
});

// SEARCH WHEN PRESSING ENTER
searchInputEl.addEventListener('keydown', function (event) {
    const searchValue = this.value.trim().toLowerCase();
    if (event.keyCode === 13) { // 13 is key code for Enter
        if (searchValue !== '') {
            // Perform search here
            window.location.href = '/html/resultados.html?pesquisa=' + encodeURIComponent(searchValue);
        }
        // Prevent form from being submitted and page from reloading
        event.preventDefault();
    } else {
        // if search is not empty, show results div
        if (searchValue !== '') {
            resultsDivEl.style.display = 'block';
        } else {
            resultsDivEl.style.display = 'none';
        }
    }
});


// listen for button click event
searchButtonEl.addEventListener('click', function (event) {
    const searchValue = searchInputEl.value.trim().toLowerCase();

    // if search is not empty, redirect to results page
    if (searchValue !== '') {
        // Prevent form from being submitted and page from reloading
        event.preventDefault();
        window.location.href = '/html/resultados.html?pesquisa=' + encodeURIComponent(searchValue);
    }

});

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Identify all category options in the navigation
let categoryOptions = document.querySelectorAll('.nav-link');

// Function that handles category click
let onCategoryClick = (event) => {
    // Redirect to the store page with the clicked category as a query parameter
    window.location.href = `/html/loja.html?${encodeURIComponent(event.target.name)}`;
};

// Attach the click event listener to each category option
categoryOptions.forEach((categoryOption) => {
    categoryOption.addEventListener('click', onCategoryClick);
});


