let slide_index = 0
let slide_play = true
let slides = document.querySelectorAll('.slide')
console.log(slides.length)
hideAllSide = () => {
    slides.forEach(e => {
        e.classList.remove('active')
    })
}

showSlide = () => {
    hideAllSide()
    slides[slide_index].classList.add('active')
}

nextSlide = () => slide_index = slide_index + 1 === slides.length ? 0 : slide_index + 1

prevSlide = () => slide_index = slide_index - 1 < 0 ? slides.length - 1 : slide_index - 1

// pause slide when hover slider

// document.querySelector('.slider').addEventListener('mouseover', () => slide_play = false)

// document.querySelector('.slider').addEventListener('mouseleave', () => slide_play = true)


document.querySelector('.slide-next').addEventListener('click', () => {
    nextSlide();
    showSlide();
})

document.querySelector('.slide-prev').addEventListener('click', () => {
    prevSlide();
    showSlide();
})


showSlide()


// setInterval(() =>{
//     if(!slide_play) return

//     nextSlide()
//     showSlide()
// }, 1000)


let products = [
    {
        name: 'JBL E55BT KEY BLACK',
        image1: './images/JBL_E55BT_KEY_BLACK_6175_FS_x1-1605x1605px.png',
        image2: './images/JBL_LIVE650BTNC_Product Image_Folded_Black.webp',
        old_price: '400',
        curr_price: '300'
    },
    {
        name: 'JBL JR 310BT',
        image1: './images/JBL_JR 310BT_Product Image_Hero_Skyblue.png',
        image2: './images/JBL_JR 310BT_Product Image_Detail_Skyblue.png',
        old_price: '400',
        curr_price: '300'
    },
    {
        name: 'JBL TUNE 750BTNC',
        image1: './images/kisspng-beats-electronics-headphones-apple-beats-studio-red-headphones.png',
        image2: './images/JBL_E55BT_KEY_RED_6063_FS_x1-1605x1605px.webp',
        old_price: '400',
        curr_price: '300'
    },
    {
        name: 'JBL Horizon',
        image1: './images/JBLHorizon_001_dvHAMaster.png',
        image2: './images/JBLHorizon_BLK_002_dvHAMaster.webp',
        old_price: '400',
        curr_price: '300'
    },
    {
        name: 'JBL Tune 220TWS',
        image1: './images/JBL_TUNE220TWS_ProductImage_Pink_ChargingCaseOpen.png',
        image2: './images/JBL_TUNE220TWS_ProductImage_Pink_Back.png',
        old_price: '400',
        curr_price: '300'
    },
    {
        name: 'UA Project Rock',
        image1: './images/190402_E1_FW19_EarbudsWCase_S13_0033-1_1605x1605_HERO.png',
        image2: './images/190402_E1_FW19_EarbudsWCase_S13_0033-1_1605x1605_BACK.png',
        old_price: '400',
        curr_price: '300'
    },
    {
        name: 'JBL Endurance SPRINT',
        image1: './images/JBL_Endurance-SPRINT_Product-Image_Red_front-1605x1605px.webp',
        image2: './images/JBL-Endurance-Sprint_Alt_Red-1605x1605px.webp',
        old_price: '400',
        curr_price: '300'
    },
]

let product_list = document.getElementById('latest-products') 
let best_product_list = document.getElementById('best-products') 
 console.log(best_product_list)

products.forEach( product => {
    let divTest = document.createElement('div')

    divTest.className = "col-3 col-md-6 col-sm-12"
    
    let prod = `
            
                <div class="product-card">
                    <div class="product-card-img">
                        <img src="${product.image1}" alt="">
                        <img src="${product.image2}" alt="">
                    </div>

                    <div class="product-card-info">

                        <div class="product-btn">
                            <div class="btn-flat btn-hover btn-shop-now">Shop now</div>

                            <div class="btn-flat btn-hover btn-cart-add">
                                <i class='bx bxs-cart-add' ></i>
                            </div>
                            <div class="btn-flat btn-hover btn-cart-add">
                                <i class='bx bxs-heart' ></i>
                            </div>
                        </div>

                        <div class="product-card-name">
                            ${product.name}
                        </div>

                        <div class="product-card-price">
                            <span><del>${product.old_price}</del></span>
                            <span class="curr-price">${product.curr_price}</span>
                        </div>
                        

                        

                    </div>
                </div>
            
    `
    divTest.innerHTML = prod;
    // product_list.insertAdjacentHTML("beforeend", prod)
    product_list.appendChild(divTest)
    best_product_list.insertAdjacentHTML("afterbegin", prod)
    
})