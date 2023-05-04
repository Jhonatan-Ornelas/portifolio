//muda a imagem do carrino /////////////////////////////////////////////////////
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

//mudar cor botao ///////////////////////////////////////////////////

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

// mause scroll for slide ////////////////////////////////////////////////
const carousel = document.querySelector('.itens');

let isDragStart = false, prevPageX, prevScrollLeft;

const dragStart = (e) => {
    //updatating global variables value on mouse down wvent
    isDragStart = true;
    prevPageX = e.pageX;
    prevScrollLeft = carousel.scrollLeft;
}

const dragging = (e) => {
    // scrolling images/carousel to left according to mouse pointer
    if (!isDragStart) return;
    e.preventDefault();
    carousel.classList.add('dragging')
    let positionDiff = e.pageX - prevPageX;
    carousel.scrollLeft = prevScrollLeft - positionDiff;
    showHideIcons();
}

const dragStop = () => {
    isDragStart = false;
    carousel.classList.remove('dragging')
}

carousel.addEventListener('mousedown', dragStart);
carousel.addEventListener('mouseup', dragStop);
carousel.addEventListener('mousemove', dragging);
carousel.addEventListener('mouseleave', dragStop);
// seta scroll for slide  ////////////////////////////////////////////////////

firstImg = carousel.querySelectorAll(".item")[0];

arrowIcons = document.querySelectorAll(".btn-lateral");
let firstImgWidth = firstImg.clientWidth ;//getting first img width & adding 1px margin value
let scrollWidth = carousel.scrollWidth - carousel.clientWidth ;// getting max scrollable width
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
    scrollWidth = carousel.scrollWidth - carousel.clientWidth ;
    scrollWidthTwo = carouselTwo.scrollWidth - carouselTwo.clientWidth;
  };

  // Define o novo intervalo
  resizeInterval = setInterval(repeatedFunction, 60);
}


const showHideIcons = () => {
    if (carousel.scrollLeft <= tolerance) {
        arrowIcons[0].style.display = 'none';
    } else {
        arrowIcons[0].style.display = 'block';
    }

    if (carousel.scrollLeft >= scrollWidth - tolerance) {
        arrowIcons[1].style.display = 'none';
    } else {
        arrowIcons[1].style.display = 'block';
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
 
window.addEventListener('resize',atulizeWidth())
// arrowIcons.forEach(icon => {
//     icon.addEventListener("click",()=>{
//         //if you didn't understand if/else ternary
//         // you can write like this too. Both do same
//         if(icon.id == 'btn-left'){
//             carousel.scrollLeft -= firstImgWidth;

//         } else {
//             carousel.scrollLeft += firstImgWidth;

//         }
//     })
// })
// fazendo as setas se esconderem por padrao a seta left esta escondida

//promocoes laterais ///////////////////////////////////////////////////////////////////// 
// mause scroll for slide ////////////////////////////////////////////////
const carouselTwo = document.querySelector('.itens-2');

let isDragStartTow = false, prevPageXTwo, prevScrollLeftTwo;

const dragStartTwo = (e) => {
    //updatating global variables value on mouse down wvent
    isDragStartTow = true;
    prevPageX = e.pageX;
    prevScrollLeft = carouselTwo.scrollLeft;
}

const draggingTwo = (e) => {
    // scrolling images/carouselTwo to left according to mouse pointer
    if (!isDragStartTow) return;
    e.preventDefault();
    carouselTwo.classList.add('dragging')
    let positionDiff = e.pageX - prevPageX;
    carouselTwo.scrollLeft = prevScrollLeft - positionDiff;
    showHideIconsTwo();
}

const dragStoptwo = () => {
    isDragStartTow = false;
    carouselTwo.classList.remove('dragging')
}

carouselTwo.addEventListener('mousedown', dragStartTwo);
carouselTwo.addEventListener('mouseup', dragStoptwo);
carouselTwo.addEventListener('mousemove', draggingTwo);
carouselTwo.addEventListener('mouseleave', dragStoptwo);
// seta scroll for slide  ////////////////////////////////////////////////////

firstImgTwo = carouselTwo.querySelectorAll(".item-2")[0];

arrowIconsTwo = document.querySelectorAll(".btn-lateral-2");
let firstImgWidthTwo = firstImgTwo.clientWidth + 1;//getting first img width & adding 1px margin value
let scrollWidthTwo = carouselTwo.scrollWidth - carouselTwo.clientWidth;// getting max scrollable width

// const showHideIconsTwo = () => {
//     // showing and prev/next icon according to scroll left value
//     arrowIconsTwo[0].style.display = carouselTwo.scrollLeft == 0 ? 'none' : 'block';
//     arrowIconsTwo[1].style.display = carouselTwo.scrollLeft == scrollWidthTwo ? 'none' : 'block';

// }

const showHideIconsTwo = () => {
    //if you didn't understand if/else ternary
    // you can write like this too. Both do same
    if (carouselTwo.scrollLeft <= tolerance) {
        arrowIconsTwo[0].style.display = 'none'
    } else {
        arrowIconsTwo[0].style.display = 'block';
    }
    if (carouselTwo.scrollLeft >= scrollWidthTwo - tolerance) {
        arrowIconsTwo[1].style.display = 'none';
    } else {
        arrowIconsTwo[1].style.display = 'block';
    }

}


arrowIconsTwo.forEach(icon => {
    icon.addEventListener("click", () => {
        //if clicked icon is left, reduce width value from the carouselTwo scroll left else add to it
        carouselTwo.scrollLeft += icon.id == "btn-left-2" ? -firstImgWidthTwo : firstImgWidthTwo;
        showHideIconsTwo();
        // setTimeout(() => showHideIconsTwo(), 60);//calling shoeHideIcons after 60ms
    })
})
