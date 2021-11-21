
// $(document).ready(function() {
//     $('.menu_icon').click(function(event){
//         $('.menu_icon,.menu_body').toggleClass('.active');
//       $('body').toggleClass('lock');         // блокирует прокрутку при аткрывание бургера body.lock{overflow: hidden;}
        
    
//     });
// });


// $(document).ready(function() {
//     $('.menu_link, #menu_link').click(function(event) {
//         $('.menu_icon, .menu_body').removeClass('.active');
//         $('body').removeClass('lock');
//     });
// });





const iconMenu = document.querySelector('.menu_icon');
if (iconMenu){
    const menuBody = document.querySelector('.menu_body');
    iconMenu.addEventListener("click", function(e){
        iconMenu.classList.toggle('active');
        menuBody.classList.toggle('active');
       
        // if (menuBody.hasClass('menu_body active')) {
        //     $('body').css('overlow', 'hidden');
        //   } else {
        //     $('body').css('overlow', 'visible');
        //   }
    })
}

