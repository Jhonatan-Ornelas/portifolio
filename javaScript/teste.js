// mause scroll for slide ////////////////////////////////////////////////
const carouselTwo = document.querySelector('.itens-2');

let isDragStartTow = false, prevPageX, prevScrollLeft;

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
    if (carouselTwo.scrollLeft == 0) {
        arrowIconsTwo[0].style.display = 'none'
    } else if (carouselTwo.scrollLeft == scrollWidthTwo || carouselTwo.scrollLeft > scrollWidthTwo) {
        arrowIconsTwo[1].style.display = 'none'
    }
    else {
        arrowIconsTwo[0].style.display = 'block'
        arrowIconsTwo[1].style.display = 'block'
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
