import gifController from './gifController.js';
import searchController from './searchController.js';

// Controls
let autoplay = window.localStorage.getItem('autoplay');
if (autoplay === 'true' || autoplay === null) {
  window.localStorage.setItem('autoplay', 'true');
  autoplay = 'true';
} else {
  window.localStorage.setItem('autoplay', 'false');
}
gifController(autoplay);

// Search
const search = document.querySelector('.search-input');
search.addEventListener('keyup', (e) => searchController(search.value));
let query = window.location.search.split('?search=')[1];
if (document.URL.indexOf('?search=') >= 0) { // display gifs if url for query is set
  searchController(query);
  search.value = query;
}
