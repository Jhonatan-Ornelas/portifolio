
// selecione os elementos
const searchInput = document.querySelector('#search');
const searchButton = document.querySelector('#search-btn');
const resultsDiv = document.querySelector('#results');

// escute o evento de clique do botão
searchButton.addEventListener('click', function() {
    const searchValue = searchInput.value.trim().toLowerCase();

    // se a pesquisa não estiver vazia, redireciona para a página de resultados
    if (searchValue !== '') {
        window.location.href = '/html/teste/resultados.html?pesquisa=' + encodeURIComponent(searchValue);

    }
});


// escuta o evento de input
searchInput.addEventListener('input', function() {
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

document.getElementById('search').addEventListener('input', function(e) {
    let searchTerm = e.target.value;
    let resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '';

    if (searchTerm.trim() !== "") { // Verifica se o campo de pesquisa não está vazio
        let results = searchProducts(searchTerm);
        results.forEach(product => {
            resultsDiv.innerHTML += '<p>' + product.productName + '</p>';
        });
    }
});





// escute o evento blur do input de pesquisa
searchInput.addEventListener('blur', function() {
    // esconde a div de resultados
    resultsDiv.style.display = 'none';
});

// escute o evento focus do input de pesquisa
searchInput.addEventListener('focus', function() {
    // mostra a div de resultados se a pesquisa não estiver vazia
    if (this.value.trim() !== '') {
        resultsDiv.style.display = 'block';
    }
});


