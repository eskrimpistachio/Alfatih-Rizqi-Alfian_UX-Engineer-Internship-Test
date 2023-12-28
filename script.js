const toTop = document.querySelector('.to-top');

window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    toTop.classList.add('active');
  } else {
    toTop.classList.remove('active');
  }
});

let currentScrollPosition = 0;
let scrollAmount = 300;

const productC = document.querySelector('.product-card-container');
const scrollP = document.querySelector('.product-scroll');

let maxScroll = -productC.offsetWidth + scrollP.offsetWidth;

function scrollHorizontally(val){
    currentScrollPosition += (val + scrollAmount);

    productC.style.left = currentScrollPosition + "px" ;
}
