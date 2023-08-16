import Handlebars from 'handlebars';

import destinations from '../data/destinations.js';
import destinationTemplate from '../template/destinations.hbs';

console.log(destinations);
Handlebars.registerHelper('imgPath', function(imgSrc) {
  return `./images/destinations/${imgSrc}`;
});
const imageBaseUrl = '';
const destinationDataWithImagePaths = destinations.map(destination => {
  return {
    ...destination,
    imgSrc: imageBaseUrl + destination.imgSrc
  };
});

const destinationContainer = document.querySelector('.destinations__swiper');
 const renderer = destinationTemplate({ destinations: destinationDataWithImagePaths });
 console.log(renderer)
 destinationContainer.insertAdjacentHTML('beforeend', renderer);
