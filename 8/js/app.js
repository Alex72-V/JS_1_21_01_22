'use strict';

const fitlerPopup = document.querySelector('.filter__category-popup');
const fitlerLabel = document.querySelector('.filter__category-label');
const filterIcon = document.querySelector('.filter__category-icon');

fitlerLabel.addEventListener('click', () => {
  fitlerPopup.classList.toggle('visually-hidden');
  fitlerLabel.classList.toggle('filterLabelPink');
  filterIcon.classList.toggle('filterIconPink');

  if (filterIcon.getAttribute('src') === 'img/filter.svg') {
    filterIcon.setAttribute('src', 'img/filterHover.svg')
  } else {
    filterIcon.setAttribute('src', 'img/filter.svg')
  }
});

let filterHeaders = document.querySelectorAll('.filter__category-header');
filterHeaders.forEach(header => {
  header.addEventListener('click', event => {
    event.target.nextElementSibling.classList.toggle('visually-hidden');
  })
});

let filterSizes = document.querySelector('.filterSizes');
let filterSizeWrap = document.querySelector('.filterSizeWrap');
filterSizeWrap.addEventListener('click', () => {
  filterSizes.classList.toggle('visually-hidden');
});
