import playPauseGif from './playPauseGif.js';
import updateResult from './updateResult.js';

// Controls
setTimeout(() => {
  if (window.localStorage.getItem('global-play') == 'false') {
    window.localStorage.setItem('global-play', 'false');
    playPauseGif(false);
  } else {
    window.localStorage.setItem('global-play', 'true');
    playPauseGif(true);
  }
}, 1100);

// Search
const search = document.querySelector('.search-input');
search.addEventListener('keyup', (e) => updateResult(e.target.value));
let query = window.location.search.split('?search=')[1];
if (document.URL.indexOf('?search=') >= 0) { // display gifs if url for query is set
  updateResult(query);
  search.value = query;
}
