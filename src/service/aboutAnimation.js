gsap.registerPlugin(ScrollTrigger);

const imgList = document.getElementById('imgList');
const textContent = document.getElementById('textContent');

const imgItems = imgList.querySelectorAll('.img__item');
const tl = gsap.timeline();

// Animate img__items from the left
imgItems.forEach((item, index) => {
  tl.from(item, {
    x: -200,
    opacity: 0,
    duration: 1,
    ease: "power2.out",
  }, `-=${0.5 * index}`);
});

// Animate about__content from the right
tl.from(textContent, {
  x: 200,
  opacity: 0,
  duration: 1,
  ease: "power2.out",
}, "-=1");