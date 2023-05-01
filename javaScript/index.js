//muda a imagem do carrino
const firstImage = "/img/shopping-cart-1.png";
const secondImage = "/img/shopping-cart.png";
const thirdImage = "/img/shopping-cart-1.png";
const forImage = "/img/shopping-cart.png";

let imageState = 1;

function changeImage() {
    if (imageState === 1) {
        document.getElementById("shopping-cart").src = secondImage;
        imageState = 1;
    }
}

function resetImage() {
    if (imageState === 1) {
        document.getElementById("shopping-cart").src = firstImage;
    }
}

function toggleImage() {
    if (imageState === 1) {
        document.getElementById("shopping-cart").src = thirdImage;
        imageState = 2;
        setTimeout(() => {
            imageState = 1;
            changeImage()
        }, 250)
    } else {
        document.getElementById("shopping-cart").src = firstImage;
        imageState = 1;
    }
}

//mudar cor botao
const btnClick = document.querySelector('#btn-click')

function changeBack() {
    btnClick.classList.add("btn-click");
}

function resetBack() {
    btnClick.classList.remove("btn-click");
}

function toggleBack() {
    changeBack()
    setTimeout(() => {
        resetBack()
    }, 100)
}