import updateResult from './updateResult.js';

const search = document.querySelector('.search__input');

search.addEventListener('keyup', (e) => updateResult(e.target.value));
