// // mause scroll for slide ////////////////////////////////////////////////
// const carouselTwo = document.querySelector('.itens-2');

// let isDragStartTow = false, prevPageX, prevScrollLeft;

// const dragStartTwo = (e) => {
//     //updatating global variables value on mouse down wvent
//     isDragStartTow = true;
//     prevPageX = e.pageX;
//     prevScrollLeft = carouselTwo.scrollLeft;
// }

// const draggingTwo = (e) => {
//     // scrolling images/carouselTwo to left according to mouse pointer
//     if (!isDragStartTow) return;
//     e.preventDefault();
//     carouselTwo.classList.add('dragging')
//     let positionDiff = e.pageX - prevPageX;
//     carouselTwo.scrollLeft = prevScrollLeft - positionDiff;
//     showHideIconsTwo();
// }

// const dragStoptwo = () => {
//     isDragStartTow = false;
//     carouselTwo.classList.remove('dragging')
// }

// carouselTwo.addEventListener('mousedown', dragStartTwo);
// carouselTwo.addEventListener('mouseup', dragStoptwo);
// carouselTwo.addEventListener('mousemove', draggingTwo);
// carouselTwo.addEventListener('mouseleave', dragStoptwo);
// // seta scroll for slide  ////////////////////////////////////////////////////

// firstImgTwo = carouselTwo.querySelectorAll(".item-2")[0];

// arrowIconsTwo = document.querySelectorAll(".btn-lateral-2");
// let firstImgWidthTwo = firstImgTwo.clientWidth + 1;//getting first img width & adding 1px margin value
// let scrollWidthTwo = carouselTwo.scrollWidth - carouselTwo.clientWidth;// getting max scrollable width

// // const showHideIconsTwo = () => {
// //     // showing and prev/next icon according to scroll left value
// //     arrowIconsTwo[0].style.display = carouselTwo.scrollLeft == 0 ? 'none' : 'block';
// //     arrowIconsTwo[1].style.display = carouselTwo.scrollLeft == scrollWidthTwo ? 'none' : 'block';

// // }

// const showHideIconsTwo = () => {
//     //if you didn't understand if/else ternary
//     // you can write like this too. Both do same
//     if (carouselTwo.scrollLeft == 0) {
//         arrowIconsTwo[0].style.display = 'none'
//     } else if (carouselTwo.scrollLeft == scrollWidthTwo || carouselTwo.scrollLeft > scrollWidthTwo) {
//         arrowIconsTwo[1].style.display = 'none'
//     }
//     else {
//         arrowIconsTwo[0].style.display = 'block'
//         arrowIconsTwo[1].style.display = 'block'
//     }

// }

// arrowIconsTwo.forEach(icon => {
//     icon.addEventListener("click", () => {
//         //if clicked icon is left, reduce width value from the carouselTwo scroll left else add to it
//         carouselTwo.scrollLeft += icon.id == "btn-left-2" ? -firstImgWidthTwo : firstImgWidthTwo;
//         showHideIconsTwo();
//         // setTimeout(() => showHideIconsTwo(), 60);//calling shoeHideIcons after 60ms
//     })
// })





////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let products = {
    data: [
        {
            productName: 'Regular White T-shirt',
            category: "Topwear",
            price: "30",
            image: '/img/white-tshirt.jpg',
        },
        {
            productName: 'Beige Short  Skirt',
            category: "Bottomwear",
            price: "49",
            image: '/img/short-skirt.jpg',
        },
        {
            productName: 'Sporty Smartwatch',
            category: "Watch",
            price: "99",
            image: '/img/sporty-smartwatch.jpg',
        },
        {
            productName: 'Basic Knitted Top',
            category: "Topwear",
            price: "29",
            image: '/img/Knitted-top.jpg',
        },
        {
            productName: 'Black leather Jacket',
            category: "Jacket",
            price: "129",
            image: '/img/black-leather-jacket.jpg',
        },
        {
            productName: 'Stylish Pink Trousers',
            category: "Bottomwear",
            price: "89",
            image: '/img/pink-trousers.jpg',
        },
        {
            productName: "Brown Men's Jacket",
            category: "Jacket",
            price: "189",
            image: '/img/brown-jacket.jpg',
        },
        {
            productName: 'Comfy Gray Pants',
            category: "Bottomwear",
            price: "49",
            image: '/img/comfy-gray-pants.jpg',
        },

    ],
};


for (let i of products.data) {
    //Create card
    let card = document.createElement('div');
    //card should have category and should stay hidden initially
    card.classList.add('card', i.category, 'hide');
    //img div
    let imgContainer = document.createElement('div');
    imgContainer.classList.add('image-container');
    //img tag
    let image = document.createElement('img');
    image.setAttribute('src', i.image);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);
    //container
    let container = document.createElement('div');
    container.classList.add('container');
    // product name
    let name = document.createElement('h5');
    name.classList.add('product-name');
    name.innerText = i.productName.toUpperCase();
    container.appendChild(name);
    //price
    let price = document.createElement('h6');
    price.innerText = '$' + i.price;
    container.appendChild(price)


    card.appendChild(container)
    document.getElementById('products').appendChild(card)
}

//parameter passed from button (parameter same as category)
function filterProduct(value) {
    //Button class code
    let buttons = document.querySelectorAll('.button-value')
    buttons.forEach((button) => {
        //check if value equals innerText
        if (value.toUpperCase() == button.innerText.toUpperCase()) {
            button.classList.add('active')
        } else {
            button.classList.remove('active')
        }
    });
    //select all cards
    let elements = document.querySelectorAll('.card');
    elements.forEach((element) => {
        // display all cards on 'all' button click
        if (value == 'all') {
            element.classList.remove('hide')
        } else {
            //check if element contains category class
            if (element.classList.contains(value)) {
                // display element based on category
                element.classList.remove('hide')
            } else {
                //hide other elements
                element.classList.add('hide')
            }
        }
    })
}

// Search button click
document.getElementById('search').addEventListener('click', () => {
    // initializations
    let searchInput = document.getElementById('search-input').value;
    let elements = document.querySelectorAll('.product-name')
    let cards = document.querySelectorAll('.card');

    //loop through all elements 
    elements.forEach((element, index) => {
        //check if text includes the search value
        if (element.innerHTML.includes(searchInput.toUpperCase())) {
            //display matching card
            cards[index].classList.remove('hide');
        } else {
            //hide others
            cards[index].classList.add('hide')
        }
    })
})



//Initially display all products
window.onload = () => {
    filterProduct('all')
}
