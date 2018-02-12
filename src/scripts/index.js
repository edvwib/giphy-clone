import playPauseGif from './playPauseGif.js';
import updateResult from './updateResult.js';

//Controls
setTimeout(() => {
  if (localStorage.getItem('global-play') === 'false') {
    localStorage.setItem('global-play', 'false');
    playPauseGif(false);
  }
  else {
    localStorage.setItem('global-play', 'true');
    playPauseGif(true);
  }
}, 1100);

//Search
const search = document.querySelector('.search-input');
search.addEventListener('keyup', (e) => updateResult(e.target.value));
if (document.URL.indexOf("?search=") >= 0){ //display gifs if url for query is set
  updateResult(window.location.search.split('=')[1]);
}


// setInterval(function () {
//   console.log(document.querySelector('video').currentTime);
//   console.log(document.querySelector('video').duration);
// }, 1500);

