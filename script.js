let position = 0;

const slidesToShow = 1;
const slidesToScroll = 1;

const container = document.querySelector('.slider__container');
const track = document.querySelector('.slider__track');
const items = document.querySelectorAll('.slider__item');
const itemsCount = items.length;
const btnPrev = document.querySelector('.btn-prev');
const btnNext = document.querySelector('.btn-next');
const sliderDots = document.querySelectorAll('.dot');
const itemWidth = container.clientWidth / slidesToShow;
const movePosition = slidesToScroll * itemWidth;
items.forEach((item) => {
  item.style.minWidth = `${itemWidth}px`;
});

btnPrev.addEventListener('click', () => {
  if (position === 0) {
    position = -itemWidth * itemsCount;
  }

  const itemsLeft = Math.abs(position) / itemWidth;

  position +=
    itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;

  setPosition();
  checkBtns();
  setDots();
});

btnNext.addEventListener('click', () => {
  nextSlide();
  setDots();
});

for (let i = 0; i < sliderDots.length; i++) {
  sliderDots[i].addEventListener('click', (element) => {
    for (let i = 0; i < sliderDots.length; i++) {
      sliderDots[i].className = sliderDots[i].className.replace(' active', '');
    }
    sliderDots[i].className += ' active';
    position = -i * itemWidth;
    setPosition();
  });
}

const setPosition = () => {
  track.style.transform = `translateX(${position}px)`;
};

const checkBtns = () => {};

checkBtns();

const nextSlide = () => {
  const itemsLeft =
    itemsCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;

  position -=
    itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;

  if (itemsLeft === 0) {
    position = 0;
  }

  setPosition();
  checkBtns();
};

const setDots = () => {
  for (let i = 0; i < sliderDots.length; i++) {
    sliderDots[i].className = sliderDots[i].className.replace(' active', '');
  }
  sliderDots[Math.abs(position) / itemWidth].className += ' active';
};

setInterval(function () {
  nextSlide();
  setDots();
}, 7000);
