const menuLinks = document.querySelectorAll('.object[data-goto]');
if (menuLinks.length > 0) {
    menuLinks.forEach(menuLink => {
        menuLink.addEventListener("click", onMenuLinkClick);
    });

    function onMenuLinkClick(e) {
        const menuLink = e.target;
        if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
            const gotoBlock = document.querySelector(menuLink.dataset.goto);
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('.header_container').offsetHeight; /* Это вышитует высоту шапки прокрутки */

            window.scrollTo({
                top: gotoBlockValue,
                behavior: "smooth"
            });
            e.preventDefault();
        }
    }
}
// =========================================================================================================================================

const anchors = document.querySelectorAll('a.menu_link')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href')
    
    document.querySelector(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}


// ==============
// const li = document.querySelectorAll('.sectButton');
// const wrapper = document.querySelector('.main_wrapper')
// const section = document.querySelectorAll('.main_wrapper > section');

// (function Scrolling_main() { 
//     li.forEach( (el,i) => { 
//         el.onclick = () => { 
//             const y = section[i].offsetTop;
//             wrapper.setAttribute('style' , `
//                 transform: translate( 0 , -${y}px);
//                 transition: 0.8s;
//                 transition-timing-function: ease-in;
//             `);                                                          https://qna.habr.com/q/1022924      скролл нав
//             reference(i)
//             activatedBT(el)
//         }
//     })
// })();

// function activatedBT(activeBT) {
//   li.forEach( button => {
//       button == activeBT ?
//       button.setAttribute("style", `background:yellow`):
//       button.setAttribute("style", `background:white`)
//   })
// }

// function reference (data){
//     window.onresize = () => {
//       const y = section[data].offsetTop;
//       wrapper.setAttribute('style' , `
//         transform: translate( 0 ,-${y}px);
//         transition: 0s;
//       `);
//     }
// } 

