let position = 0;

const slidesToShow = 1;
const slidesToScroll = 1;

const container = document.querySelector('.slider__container');
const track = document.querySelector('.slider__track');
const items = document.querySelectorAll('.slider__item');
const itemsCount = items.length;

const btnPrev = document.querySelector('.btn-prev');
const btnNext = document.querySelector('.btn-next');

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
});

btnNext.addEventListener('click', () => {
  nextSlide();
});

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

setInterval(function () {
  nextSlide();
}, 7000);
