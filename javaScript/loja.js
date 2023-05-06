// let products = {
//     data: [
//         {
//             productName: 'Regular White T-shirt',
//             category: "Topwear",
//             price: "30",
//             image: '/img/white-tshirt.jpg',
//         },
//         {
//             productName: 'Beige Short  Skirt',
//             category: "Bottomwear",
//             price: "49",
//             image: '/img/short-skirt.jpg',
//         },
//         {
//             productName: 'Sporty Smartwatch',
//             category: "Watch",
//             price: "99",
//             image: '/img/sporty-smartwatch.jpg',
//         },
//         {
//             productName: 'Basic Knitted Top',
//             category: "Topwear",
//             price: "29",
//             image: '/img/Knitted-top.jpg',
//         },
//         {
//             productName: 'Black leather Jacket',
//             category: "Jacket",
//             price: "129",
//             image: '/img/black-leather-jacket.jpg',
//         },
//         {
//             productName: 'Stylish Pink Trousers',
//             category: "Bottomwear",
//             price: "89",
//             image: '/img/pink-trousers.jpg',
//         },
//         {
//             productName: "Brown Men's Jacket",
//             category: "Jacket",
//             price: "189",
//             image: '/img/brown-jacket.jpg',
//         },
//         {
//             productName: 'Comfy Gray Pants',
//             category: "Bottomwear",
//             price: "49",
//             image: '/img/comfy-gray-pants.jpg',
//         },

//     ],
// };


// for (let i of products.data) {
//     //Create card
//     let card = document.createElement('div');
//     //card should have category and should stay hidden initially
//     card.classList.add('card', i.category, 'hide');
//     //img div
//     let imgContainer = document.createElement('div');
//     imgContainer.classList.add('image-container');
//     //img tag
//     let image = document.createElement('img');
//     image.setAttribute('src', i.image);
//     imgContainer.appendChild(image);
//     card.appendChild(imgContainer);
//     //container
//     let container = document.createElement('div');
//     container.classList.add('container');
//     // product name
//     let name = document.createElement('h5');
//     name.classList.add('product-name');
//     name.innerText = i.productName.toUpperCase();
//     container.appendChild(name);
//     //price
//     let price = document.createElement('h6');
//     price.innerText = '$' + i.price;
//     container.appendChild(price)


//     card.appendChild(container)
//     document.getElementById('products').appendChild(card)
// }

// //parameter passed from button (parameter same as category)
// function filterProduct(value) {
//     //Button class code
//     let buttons = document.querySelectorAll('.button-value')
//     buttons.forEach((button) => {
//         //check if value equals innerText
//         if (value.toUpperCase() == button.innerText.toUpperCase()) {
//             button.classList.add('active')
//         } else {
//             button.classList.remove('active')
//         }
//     });
//     //select all cards
//     let elements = document.querySelectorAll('.card');
//     elements.forEach((element) => {
//         // display all cards on 'all' button click
//         if (value == 'all') {
//             element.classList.remove('hide')
//         } else {
//             //check if element contains category class
//             if (element.classList.contains(value)) {
//                 // display element based on category
//                 element.classList.remove('hide')
//             } else {
//                 //hide other elements
//                 element.classList.add('hide')
//             }
//         }
//     })
// }

// // Search button click
// document.getElementById('search').addEventListener('click', () => {
//     // initializations
//     let searchInput = document.getElementById('search-input').value;
//     let elements = document.querySelectorAll('.product-name')
//     let cards = document.querySelectorAll('.card');

//     //loop through all elements 
//     elements.forEach((element, index) => {
//         //check if text includes the search value
//         if (element.innerHTML.includes(searchInput.toUpperCase())) {
//             //display matching card
//             cards[index].classList.remove('hide');
//         } else {
//             //hide others
//             cards[index].classList.add('hide')
//         }
//     })
// })



// //Initially display all products
// window.onload = () => {
//     filterProduct('all')
// }
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let products = {
    data: [
        //PROMOÇOES ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
        {
            productName: 'Headset de Realidade Virtual Journey Glass Xd',
            category: "Promoções",
            price: "$999.00",
            priceP: "$899.99",
            image: '/img/promocoes/Headset-de-Realidade-Virtual-Journey-Glass-Xd',
        },
        {
            productName: 'Light Phantom JP, 5g, 256 GB',
            category: "Promoções",
            price: "$1.999.99",
            priceP: "$899.99",
            image: '/img/promocoes/Light-Phantom-JP-5g-256-GB',
        },
        {
            productName: 'Smartwatch Space Moon com carregador',
            category: "Promoções",
            price: "$199.95",
            priceP: "$159.95",
            image: '/img/promocoes/Smartwatch-Space-Moon-com-carregador',
        },
        {
            productName: 'Alto-falante portátil Turn5, Bluetooth',
            category: "Promoções",
            price: "$129.99",
            priceP: "$99.99",
            image: '/img/promocoes/Alto-falante-portátil-Turn5-Bluetooth',
        },
        {
            productName: 'Alto-falante Turn5 portátil com alça e Bluetooth',
            category: "Promoções",
            price: "$479.99",
            priceP: "$199.99",
            image: '/img/promocoes/Alto-falante-Turn5-portátil-com-alça-e-Bluetooth',
        },
        {
            productName: 'Soundbar, Bluetooth, conectividade HDMI-ARC',
            category: "Promoções",
            price: "$2,499.99",
            priceP: "$1,999.99",
            image: '/img/promocoes/Soundbar-Bluetooth-conectividade-HDMI-ARC',
        },
        {
            productName: 'Câmera DSLR Pantony Old School, lente 18-55mm',
            category: "Promoções",
            price: "$1,699.99",
            priceP: "$1,299.99",
            image: '/img/promocoes/Câmera-DSLR-Pantony-Old-School-lente-18-55mm',
        },
        {
            productName: 'Tablet Ocean Pro 11 - 12.3", touch screen',
            category: "Promoções",
            price: "$929.99",
            priceP: "$699.99",
            image: '/img/promocoes/Tablet-Ocean-Pro-11-touch-screen',
        },
        {
            productName: 'Tablet Mini Sheer Pro, 7,9 polegadas',
            category: "Promoções",
            price: "$100.99",
            priceP: "$59.99",
            image: '/img/promocoes/Tablet-Mini-Sheer-Pro-7-polegadas',
        },
        {
            productName: 'Tablet Ove FD Plus 10.3", 64 GB',
            category: "Promoções",
            price: "$349.99",
            priceP: "249.99",
            image: '/img/promocoes/Tablet-Ove-FD-Plus-10-64GB',
        },
        {
            productName: 'Laptop Pilates 16", touch screen, 24 GB memória',
            category: "Promoções",
            price: "$1,099.99",
            priceP: "$899.99",
            image: '/img/promocoes/Laptop-Pilates-16touch-screen-24GB-memória',
        },
        {
            productName: 'Headphone Balo 700 wireless cancelamento de ruido',
            category: "Promoções",
            price: "$329.00",
            priceP: "$279.00",
            image: '/img/promocoes/Headphone-Balo-700-wireless-cancelamento-de-ruido' ,
        },
        {
            productName: 'Alto-falante mini, portátil, Bluetooth',
            category: "Promoções",
            price: "$129.99",
            priceP: "$99.99",
            image: '/img/promocoes/Alto-falante-mini-portátil-Bluetooth',
        },
        {
            productName: 'Tablet JP - Space 10,4", WI-FI,128 GB',
            category: "Promoções",
            price: "$329.99",
            priceP: "$259.99",
            image: '/img/promocoes/Tablet-JP-Space-10-WI-FI-128GB',
        },
        {
            productName: 'Câmera de Segurança de Rede Interna H1C wireless, 1080p',
            category: "Promoções",
            price: "$379.99",
            priceP: "$329.99",
            image: '/img/promocoes/Câmera-de-Segurança-de-Rede-Interna-H1C-wireless-1080p',
        },
        {
            productName: 'Headphone in-ear wireless, cancelamento de ruido',
            category: "Promoções",
            price: "$229.99",
            priceP: "$199.99",
            image: '/img/promocoes/Headphone-wireless-cancelamento-de-ruido',
        },
        {
            productName: 'laptop para games JP 15.6", 512 GB SSD 16GB',
            category: "Promoções",
            price: "$1,099.99",
            priceP: "$849.99",
            image: '/img/promocoes/laptop-para-gamers-JP-15-512GB',
        },
        {
            productName: 'Headset pra games, Surround Sound 10.2',
            category: "Promoções",
            price: "$159.55",
            priceP: "$129.99",
            image: '/img/promocoes/Headset-pra-games-Surround',
        },
        {
            productName: "Câmera digital Mini, Á prova d'água, Megapixel",
            category: "Promoções",
            price: "$699.99",
            priceP: "$499.99",
            image: '/img/promocoes/Camera-digital-Mini-a-prova-d-agua-Megapixel',
        },
        {
            productName: 'Smart TV Allure 55" UHD 4K LED Class',
            category: "Promoções",
            price: "$449.99",
            priceP: "$399.99",
            image: '/img/promocoes/Smart-TV-Allure-55-UHD-4K-LED-Class',
        },
        {
            productName: 'Smart TV 65"UHD 4K LED Class Nano',
            category: "Promoções",
            price: "$499.99",
            priceP: "$599.99",
            image: '/img/promocoes/Smart-TV-65-UHD-4K-LED-Class-Nano',
        },
        {
            productName: 'HV- 29" IPS LED FHD FreeSync Monitor JP',
            category: "Promoções",
            price: "$269.99",
            priceP: "$149.99",
            image: '/img/promocoes/HV-29-IPS-LED-FHD-FreeSync-Monitor-JP',
        },
        {
            productName: 'Protector XPD Go 5G, 128GB',
            category: "Promoções",
            price: "$199.99",
            priceP: "$129.99",
            image: '/img/promocoes/Protector-XPD-Go-5G-128GB',
        },
        {
            productName: 'Smartphone Z Pixel Max 128 GB, desbloqueado',
            category: "Promoções",
            price: "$449.99",
            priceP: "$399.99",
            image: '/img/promocoes/Smartphone-Z-Pixel-Max-128-GB-desbloqueado',
        },
        {
            productName: 'OVE Light Space 5G, 128 GB',
            category: "Promoções",
            price: "$579.99",
            priceP: "$559.99",
            image: '/img/promocoes/OVE-Light-Space-5G-128-GB',
        },
        {
            productName: 'Fitboot Inspire, tracker de frequência cardiaca',
            category: "Promoções",
            price: "$49.99",
            priceP: "$44.99",
            image: '/img/promocoes/Fitboot-Inspire-tracker-de-frequência-cardiaca',
        },
        //MAIS VENDIDOS//////////////////////////////////////////////
        ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        {
            productName: 'Smart TV shel 50" UHD 4K LED Class',
            category: "Mais vendidos",
            priceP: "$349.99",
            image: '/img/mais-vendidos/Smart-TV-shel-50-UHD-4K-LED-Class',
        },
        {
            productName: 'Tablet JP - Space 10,4", Wi-Fi, 32 GB',
            category: "Mais vendidos",
            price: "$329.99",
            priceP: "$259.99",
            image: '/img/promocoes/Tablet-JP-Space-10-WI-FI-128GB',
        },
        {
            productName: 'Fitboot Inspire, tracker de frequência cardíaca',
            category: "Mais vendidos",
            price: "$49.99",
            priceP: "$44.99",
            image: '/img/promocoes/Fitboot-Inspire-tracker-de-frequência-cardiaca',
        },
        {
            productName: 'Drone Quadcopter HKI Tech, câmera e controle',
            category: "Mais vendidos",
            priceP: "$579.99",
            image: '/img/mais-vendidos/Drone-Quadcopter-HKI-Tech-câmera-e-controle',
        },
        {
            productName: 'Alto-falante SDK portátil, Bluetooth',
            category: "Mais vendidos",
            priceP: "$219.99",
            image: '/img/mais-vendidos/Alto-falante-SDK-portátil-Bluetooth',
        },
        {
            productName: 'Smart TV 65" UHD 4K LED Class Nano',
            category: "Mais vendidos",
            price: "$499.99",
            priceP: "$459.99",
            image: '/img/mais-vendidos/Smart-TV-65-UHD-4K-LED-Class-Nano',
        },
        {
            productName: 'Headphone In-ear wireless, cancelamento de ruído',
            category: "Mais vendidos",
            price: "$229.99",
            priceP: "$199.99",
            image: '/img/promocoes/Headphone-wireless-cancelamento-de-ruido',
        },
        {
            productName: 'laptop para games JP 15.6", 512 GB SSD 16GB',
            category: "Mais vendidos",
            price: "$1,099.99",
            priceP: "$849.99",
            image: '/img/promocoes/laptop-para-gamers-JP-15-512GB',
        },
        {
            productName: "Câmera digital Mini, À prova d'água, Megapixel",
            category: "Mais vendidos",
            price: "$699.99",
            priceP: "$499.99",
            image: '/img/promocoes/Camera-digital-Mini-a-prova-d-agua-Megapixel',
        },
        {
            productName: "Headphone branco wireless",
            category: "Mais vendidos",
            priceP: "$149.99",
            image: '/img/mais-vendidos/Headphone-branco-wireless',
        },
        {
            productName: 'Tablet Ocean Pro 11 - 12.3", touch screen',
            category: "Mais vendidos",
            price: "$929.99",
            priceP: "$699.99",
            image: '/img/promocoes/Tablet-Ocean-Pro-11-touch-screen',
        },
        {
            productName: 'Smartphone Z Pixel Max 128 GB, desbloqueado',
            category: "Mais vendidos",
            price: "$449.99",
            priceP: "$399.99",
            image: '/img/promocoes/Smartphone-Z-Pixel-Max-128-GB-desbloqueado',
        },
        //COMPUTADORES//////////////////////////////////////////////
        //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        {
            productName: 'Laptop Pilates 14", touch screen, 12 GB memória',
            category: "Computadores",
            priceP: "516.99",
            image: '/img/promocoes/Laptop-Pilates-14-touch-screen-12-GB-memória',
        },
        {
            productName: 'Laptop Pilates 16", touch screen, 24 GB memória',
            category: "Computadores",
            price: "$1,099.99",
            priceP: "$899.99",
            image: '/img/promocoes/Laptop-Pilates-16touch-screen-24GB-memória',
        },
        {
            productName: 'laptop para games JP 15.6", 512 GB SSD 16GB',
            category: "Computadores",
            price: "$1,099.99",
            priceP: "$849.99",
            image: '/img/promocoes/laptop-para-gamers-JP-15-512GB',
        },
        {
            productName: 'Desktop Corr, 12 GB memória, WiFi, Bluetooth, Teclado, Mouse',
            category: "Computadores",
            priceP: "799.99",
            image: '/img/computadores/Desktop-Corr-12-GB-memória-WiFi-Bluetooth-Teclado-Mouse',
        },
        {
            productName: 'Desktop Corr 29", 24 GB memória, Teclado e Mouse',
            category: "Computadores",
            priceP: "1,399.99",
            image: '/img/computadores/Desktop-Corr-29-24GB-memória-Teclado-e-Mouse',
        },
        {
            productName: 'Laptop Pilates 16", 12 GB memória, touch screen',
            category: "Computadores",
            priceP: "799.99",
            image: '/img/computadores/Laptop-Pilates-16-12GBmemória-touch-screen',
        },
        {
            productName: 'Laptop MSP 14", 16 GB memória, cinza',
            category: "Computadores",
            priceP: "849.99",
            image: '/img/computadores/LaptopMSP-14-16GB-memória-cinza',
        },
        {
            productName: 'Monitor FHD Wide LED 29" JP',
            category: "Computadores",
            price: "309.99",
            priceP: "199.99",
            image: '/img/computadores/',
        },
        {
            productName: 'HV- 29" IPS LED FHD FreeSync Monitor JP',
            category: "Computadores",
            price: "$269.99",
            priceP: "$149.99",
            image: '/img/promocoes/HV-29-IPS-LED-FHD-FreeSync-Monitor-JP',
        },
        //TABLETS ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

        {
            productName: 'Tablet transparente 10,2", Wi-Fi, 32 GB',
            category: "Tablets",
            priceP: "189.99",
            image: '/img/tablets/Tablet-transparente-10,2-Wi-Fi-32GB',
        },
        {
            productName: 'Tablet JP - Space 10,4", Wi-Fi, 32 GB',
            category: "Tablets",
            price: "$329.99",
            priceP: "$259.99",
            image: '/img/promocoes/Tablet-JP-Space-10-WI-FI-128GB',
        },
        {
            productName: 'Tablet Pilates Go 10.5", touch screen, 64 GB com capa',
            category: "Tablets",
            priceP: "479.99",
            image: '/img/tablets/Tablet-Pilates-Go-touch-screen-64-GB-com-capa',
        },
        {
            productName: 'Tablet Ove FD Plus 10.3", 64 GB',
            category: "Tablets",
            price: "$349.99",
            priceP: "249.99",
            image: '/img/promocoes/Tablet-Ove-FD-Plus-10-64GB',
        },
        {
            productName: 'Tablet Mini Sheer Pro, 7,9 polegadas',
            category: "Tablets",
            price: "$100.99",
            priceP: "$59.99",
            image: '/img/promocoes/Tablet-Mini-Sheer-Pro-7-polegadas',
        },
        {
            productName: 'Tablet Ocean Pro 11 - 12.3", touch screen',
            category: "Tablets",
            price: "$929.99",
            priceP: "$699.99",
            image: '/img/promocoes/Tablet-Ocean-Pro-11-touch-screen',
        },
        {
            productName: 'Tablet Corr Playtime 10.3", Wi-Fi, 32 GB',
            category: "Tablets",
            priceP: "219.99",
            image: '/img/tablets/Tablet-Corr-Playtime-10-Wi-Fi-32GB',
        },
        {
            productName: 'Tablet Space S7 - 11”, 128 GB, Wi-Fi',
            category: "Tablets",
            priceP: "899.99",
            image: '/img/tablets/Tablet-Space-S7-11-128GB-Wi-Fi',
        },
        {
            productName: 'Câmera de Segurança Externa Shak Spotlight',
            category: "Drones-e-cameras",
            priceP: "$249.99",
            image: '/img/drones-e-cameras/Câmera-de-Segurança-Externa-Shak-Spotlight',
        },
        {
            productName: 'Câmera de Segurança de Rede Interna H1C wireless, 1080p',
            category: "Drones-e-cameras",
            price: "$379.99",
            priceP: "$329.99",
            image: '/img/promocoes/Câmera-de-Segurança-de-Rede-Interna-H1C-wireless-1080p',
        },
        {
            productName: 'Quadcopter Wave Mini 4 com controle remoto',
            category: "Drones-e-cameras",
            priceP: "$1,749.99",
            image: '/img/drones-e-cameras/Quadcopter-Wave-Mini-4-com-controle-remoto',
        },
        {
            productName: 'Câmera DSLR Pantony Old School, lente 18-55mm',
            category: "Drones-e-cameras",
            price: "$1,699.99",
            priceP: "$1,299.99",
            image: '/img/promocoes/Câmera-DSLR-Pantony-Old-School-lente-18-55mm',
        },
        {
            productName: 'Drone Quadcopter HKI Tech, câmera e controle',
            category: "Drones-e-cameras",
            priceP: "$579.99",
            image: '/img/mais-vendidos/Drone-Quadcopter-HKI-Tech-câmera-e-controle',
        },
        {
            productName: "Câmera digital Mini, À prova d'água, Megapixel",
            category: "Drones-e-cameras",
            price: "$699.99",
            priceP: "$499.99",
            image: '/img/promocoes/Camera-digital-Mini-a-prova-d-agua-Megapixel',
        },
        {
            productName: 'Drone EXE Mini, Controlador Sky',
            category: "Drones-e-cameras",
            price: "",
            priceP: "$999.99",
            image: '/img/drones-e-cameras/Drone-EXE-Mini-Controlador-Sky',
        },
        {
            productName: 'Câmera digital Pantony 180, 20.0 megapixels',
            category: "Drones-e-cameras",
            price: "",
            priceP: "$239.99",
            image: '/img/drones-e-cameras/Camera-digital-Pantony-180-20.0-megapixels',
        },
        //HEADPHONES//////////////////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        {
            productName: 'Headphone Balo 700 wireless cancelamento de ruido',
            category: "Headphones",
            price: "$329.00",
            priceP: "$279.00",
            image: '/img/promocoes/Headphone-Balo-700-wireless-cancelamento-de-ruido' ,
        },
        {
            productName: 'Headphone Space Buds wireless',
            category: "Headphones",
            price: "",
            priceP: "99.99",
            image: '/img/headphones/Headphone-Space-Buds-wireless',
        },
        {
            productName: 'Headphone Drums Pro wireless',
            category: "Headphones",
            priceP: "479.99",
            image: '/img/headphones/Headphone-Drums-Pro-wireless',
        },
        {
            productName: 'Headphone In-ear wireless, cancelamento de ruído',
            category: "Headphones",
            price: "$229.99",
            priceP: "$199.99",
            image: '/img/promocoes/Headphone-wireless-cancelamento-de-ruido',
        },
        {
            productName: 'Headphone Pantony wireless certificado',
            category: "Headphones",
            priceP: "$249.99",
            image: '/img/headphones/Headphone-Pantony-wireless-certificado',
        },
        {
            productName: "Headphone branco wireless",
            category: "Headphones",
            priceP: "$149.99",
            image: '/img/mais-vendidos/Headphone-branco-wireless',
        },
        {
            productName: 'Headset pra games, Surround Sound 10.2',
            category: "Headphones",
            price: "$159.55",
            priceP: "$129.99",
            image: '/img/promocoes/Headset-pra-games-Surround',
        },
        {
            productName: 'Headphone com fio MX50',
            category: "Headphones",
            price: "",
            priceP: "$17.99",
            image: '/img/headphones/Headphone-com-fio-MX50',
        },
        //ALTO-FALANTES///////////////////////////////////////////////
        //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        {
            productName: 'Alto-falante Turn5 portátil com alça e Bluetooth',
            category: "Alto-falantes",
            price: "$479.99",
            priceP: "$199.99",
            image: '/img/promocoes/Alto-falante-Turn5-portátil-com-alça-e-Bluetooth',
        },
        {
            productName: 'Soundbar, Bluetooth, conectividade HDMI-ARC',
            category: "Alto-falantes",
            price: "$2,499.99",
            priceP: "$1,999.99",
            image: '/img/promocoes/Soundbar-Bluetooth-conectividade-HDMI-ARC',
        },
        {
            productName: 'Alto-falante Pill Shape portátil, prata, Bluetooth',
            category: "Alto-falantes",
            priceP: "$39.99",
            image: '/img/alto-falantes/Alto-falante-Pill-Shape-portátil-prata-Bluetooth' ,
        },
        {
            productName: 'Alto-falante mini, portátil, Bluetooth',
            category: "Alto-falantes",
            price: "$129.99",
            priceP: "$99.99",
            image: '/img/promocoes/Alto-falante-mini-portátil-Bluetooth',
        },
        {
            productName: 'Alto falante Studio 8 portátil, Bluetooth',
            category: "Alto-falantes",
            priceP: "19.99",
            image: '/img/promocoes/alto-falantes/Alto-falante-Studio-8-portátil-Bluetooth' ,
        },
        {
            productName: 'Alto-falante SDK portátil, Bluetooth',
            category: "Alto-falantes",
            priceP: "549.99",
            image: '/img/promocoes/alto-falantes/Alto-falante-SDK-portátil-Bluetooth' ,
        },
        {
            productName: 'Alto-falante SXD Mini portátil, Bluetooth',
            category: "Alto-falantes",
            priceP: "219.99",
            image: '/img/promocoes/alto-falantes/Alto-falante-SXD-Mini-portátil-Bluetooth' ,
        },
        {
            productName: 'Alto-falante portátil Turn5, Bluetooth',
            category: "Alto-falantes",
            price: "$129.99",
            priceP: "$99.99",
            image: '/img/promocoes/Alto-falante-portátil-Turn5-Bluetooth',
        },

        //MOBILE///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        {
            productName: 'Pantony X21 5G, 128 GB, com caneta Z',
            category: "Mobile",
            priceP: "$299.99",
            image: '/img/celular/celular/Pantony-X21-5G-128GB-com-caneta-Z',
        },
        {
            productName: 'Phantom Exmax JP 5G, 16 GB',
            category: "Mobile",
            priceP: "$99.99",
            image: '/img/celular/Phantom-Exmax-JP-5G-16GB',
        },
        {
            productName: 'Smartphone Z Pixel Max 128 GB, desbloqueado',
            category: "Mobile",
            price: "$449.99",
            priceP: "$399.99",
            image: '/img/promocoes/Smartphone-Z-Pixel-Max-128-GB-desbloqueado',
        },
        {
            productName: 'OVE Light Space 5G, 128 GB',
            category: "Mobile",
            price: "$579.99",
            priceP: "$559.99",
            image: '/img/promocoes/OVE-Light-Space-5G-128-GB',
        },
        {
            productName: 'Pantony Super 10W 5G, 128 GB',
            category: "Mobile",
            priceP: "$599",
            image: '/img/celular/Pantony-Super-10W-5G-128-GB',
        },
        {
            productName: 'Light Phantom JP, 5g, 256 GB',
            category: "Mobile",
            price: "$1.999.99",
            priceP: "$899.99",
            image: '/img/promocoes/Light-Phantom-JP-5g-256-GB',
        },
        {
            productName: 'Protector XPD Go 5G, 128GB',
            category: "Mobile",
            price: "$199.99",
            priceP: "$129.99",
            image: '/img/promocoes/Protector-XPD-Go-5G-128GB',
        },
        {
            productName: 'Pantony S MAX 5G, 128 GB',
            category: "Mobile",
            priceP: "129.99",
            image: '/img/celular/Pantony-S-MAX-5G-128-GB',
        },
        //TV-E-HOME-THEATER/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        {
            productName: 'Smart TV shel 50" UHD 4K LED Class',
            category: "TV e home theater",
            priceP: "$349.99",
            image: '/img/mais-vendidos/Smart-TV-shel-50-UHD-4K-LED-Class',
        },
        {
            productName: 'Soundbar, Bluetooth, conectividade HDMI-ARC',
            category: "TV e home theater",
            price: "$2,499.99",
            priceP: "$1,999.99",
            image: '/img/promocoes/Soundbar-Bluetooth-conectividade-HDMI-ARC',
        },
        {
            productName: 'Smart TV Shel 40" Full HD LED Class',
            category: "TV e home theater",
            priceP: "$169.99",
            image: '/img/tv-e-home-theater/Smart-TV-Shel-40-Full-HD-LED-Class',
        },
        {
            productName: 'Projetor para Home Theater EPSON 4K PRO-UHD 3LCD',
            category: "TV e home theater",
            priceP: "$449.",
            image: '/img/tv-e-home-theater/Projetor-para-Home-Theater-EPSON-4K-PRO-UHD-3LCD',
        },
        {
            productName: 'Smart TV Allure 55" UHD 4K LED Class',
            category: "TV e home theater",
            price: "$449.99",
            priceP: "$399.99",
            image: '/img/promocoes/Smart-TV-Allure-55-UHD-4K-LED-Class',
        },
        {
            productName: 'Projetor Mini Vankyo 470 wireless',
            category: "TV e home theater",
            priceP: "$209.99",
            image: '/img/tv-e-home-theater/Projetor-Mini-Vankyo-470-wireless',
        },
        {
            productName: 'Smart Streamer TV 42" Class Full HD',
            category: "TV e home theater",
            priceP: "$149.99",
            image: '/img/tv-e-home-theater/Smart-Streamer-TV-42-Class-Full-HD',
        },
        {
            productName: 'Smart TV 65" UHD 4K LED Class Nano',
            category: "TV e home theater",
            price: "$499.99",
            priceP: "$459.99",
            image: '/img/mais-vendidos/Smart-TV-65-UHD-4K-LED-Class-Nano',
        },
        //TECNOLOGIA-VESTIVEL///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        {
            productName: 'Smartwatch Space Moon com carregador',
            category: "Tecnologia vestivel",
            price: "$199.95",
            priceP: "$159.95",
            image: '/img/promocoes/Smartwatch-Space-Moon-com-carregador',
        },
        {
            productName: 'Fitboot Inspire, tracker de frequência cardíaca',
            category: "Tecnologia vestivel",
            price: "$49.99",
            priceP: "$44.99",
            image: '/img/promocoes/Fitboot-Inspire-tracker-de-frequência-cardiaca',
        },
        {
            productName: 'Óculos VR Safay GEN 2, 256 GB, controladores de toque',
            category: "Tecnologia vestivel",
            priceP: "$349.99",
            image: '/img/tecnologia-vestivel/Óculos-VR-Safay-GEN-2-256GB-controladores-de-toque',
        },
        {
            productName: 'Smartwatch Fitness FitWatch',
            category: "Tecnologia vestivel",
            priceP: "$249.99",
            image: '/img/tecnologia-vestivel/Smartwatch-Fitness-FitWatch',
        },
        {
            productName: 'Sistema de Realidade Virtual HV para PC',
            category: "Tecnologia vestivel",
            priceP: "$429.99",
            image: '/img/tecnologia-vestivel/Sistema-de-Realidade-Virtual-HV-para-PC',
        },
        {
            productName: 'Rastreador de Atividades Pantony 6P',
            category: "Tecnologia vestivel",
            priceP: "$169.99",
            image: '/img/tecnologia-vestivel/Rastreador-de-Atividades-Pantony-6P',
        },
        {
            productName: 'Smartwatch fitness FitWatch XDH',
            category: "Tecnologia vestivel",
            priceP: "$399.99",
            image: '/img/tecnologia-vestivel/Smartwatch-fitness-FitWatch-XDH',
        },
        {
            productName: 'Headset de Realidade Virtual Journey Glass Xd',
            category: "Tecnologia vestivel",
            price: "$999.00",
            priceP: "$899.99",
            image: '/img/promocoes/Headset-de-Realidade-Virtual-Journey-Glass-Xd',
        },





    ],
};