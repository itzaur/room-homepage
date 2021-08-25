'use strict';

const menu = document.querySelector('.content__item--menu');
const input = document.querySelector('.menu-box input');
const title = document.querySelector('.title-box h1');
const paragraphe = document.querySelector('.title-box p');
const btnLeft = document.querySelector('.arrow-left');
const btnRight = document.querySelector('.arrow-right');
const imgs = [1, 2, 3];

let current = 0;

function showImg() {
  const item = imgs[current];
  menu.style.background = `url('images/desktop-image-hero-${imgs[current]}.jpg') no-repeat center`;
  menu.style.backgroundSize = 'cover';

  if (item === 2) {
    title.textContent = 'We are available all across the globe';
    paragraphe.textContent = `With stores all over the world, it's
    easy for you to find furniture for your home or place of business. Locally,
    we’re in most major cities throughout the country. Find the branch nearest
    you using our store locator. Any questions? Don't hesitate to contact us
    today.`;
  } else if (item === 3) {
    title.textContent = 'Manufactured with the best materials';
    paragraphe.textContent = `Our modern furniture
    store provide a high level of quality. Our company has invested in advanced
    technology to ensure that every product is made as perfect and as consistent
    as possible. With three decades of experience in this industry, we
    understand what customers want for their home and office.`;
  } else {
    title.textContent = 'Discover innovative ways to decorate';
    paragraphe.textContent = `We provide unmatched quality, comfort, and style for property
    owners across the country. Our experts combine form and function
    in bringing your vision to life. Create a room in your own style
    with our collection and make your property a reflection of you and
    what you love.`;
  }
}

btnRight.addEventListener('click', function (e) {
  e.preventDefault();
  current++;
  if (current > imgs.length - 1) {
    current = 0;
  }
  showImg();
});

btnLeft.addEventListener('click', function (e) {
  e.preventDefault();
  current--;
  if (current < 0) {
    current = imgs.length - 1;
  }
  showImg();
});

input.addEventListener('click', function () {
  document.querySelector('.nav').classList.toggle('shadow');
});
