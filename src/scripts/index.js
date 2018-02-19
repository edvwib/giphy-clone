import App from './App.js';

window.app = new App();

/*
import {setupControls} from './gifController.js';
import {search} from './searchController.js';

// Controls
setupControls();

// Search
const searchForm = document.querySelector('.search-input');
searchForm.addEventListener('keyup', (e) => search(searchForm.value));
let query = window.location.search.split('?search=')[1];
if (document.URL.indexOf('?search=') >= 0) { // display gifs if url for query is set
  search(query);
  searchForm.value = query;
}
*/
