const saleBtn = document.querySelector('.apartment_sale_btn');
const saleBlock = document.querySelector('.apartment_sell');
if (iconMenu){
    iconMenu.addEventListener("click", function(e){
        saleBtn.classList.toggle('block-open');
        saleBlock.classList.toggle('block-open');

    })
}