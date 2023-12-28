const toTop = document.querySelector('.to-top');

window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    toTop.classList.add('active');
  } else {
    toTop.classList.remove('active');
  }
});

var cards = document.querySelectorAll('.card');
var nextButton = document.querySelector('.next-button');
var prevButton = document.querySelector('.prev-button');
var currentIndex = 0;

function updateButtons() {
  var cardsPerView = getCardsPerView();
  prevButton.style.visibility = currentIndex > 0 ? 'visible' : 'hidden';
  nextButton.style.visibility =
    currentIndex < cards.length - cardsPerView ? 'visible' : 'hidden';
}

function getCardsPerView() {
  var cardWidth = cards[0].offsetWidth;
  var viewportWidth = window.innerWidth;
  return Math.floor(viewportWidth / cardWidth);
}

nextButton.addEventListener('click', function () {
  var cardsPerView = getCardsPerView();
  if (currentIndex + cardsPerView < cards.length) {
    currentIndex += cardsPerView;
    cards[currentIndex].scrollIntoView({ behavior: 'smooth' });
  }
  updateButtons();
});

prevButton.addEventListener('click', function () {
  var cardsPerView = getCardsPerView();
  if (currentIndex - cardsPerView >= 0) {
    currentIndex -= cardsPerView;
    cards[currentIndex].scrollIntoView({ behavior: 'smooth' });
  }
  updateButtons();
});
