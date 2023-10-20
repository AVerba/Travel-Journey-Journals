const header = document.querySelector('.header');
const menuLinks = document.querySelectorAll('.menu__link');

function changeHeaderBackground(e) {
  if (window.scrollY > 2) {
    header.style.backgroundColor = '#00a0b1';
    header.style.opacity = '0.7';
    menuLinks.forEach(link => {
      link.style.color = '#36363';
    });
  } else {
    header.style.backgroundColor = 'transparent';
    // header.style.backgroundColor = 'transparent';
    menuLinks.forEach(link => {
      link.style.color = 'white';
    });
  }
}

window.addEventListener('scroll', changeHeaderBackground);