import {getAutoplaySetting} from './gifController.js';

let timeOut;
function search (query) {
  if (query.length > 0) {
    clearTimeout(timeOut);
    timeOut = setTimeout(() => {
      const apiKey = 'gPUGVC81TiJn8FV4ZTnfM32wji8sBltf';
      let url = `http://api.giphy.com/v1/gifs/search?q=${query}&api_key=${apiKey}&limit=5`;

      const gallery = document.querySelector('.gallery');
      if (gallery.children.length > 0) { // Clear gallery of previuos gifs
        while (gallery.firstChild) {
          gallery.removeChild(gallery.firstChild);
        }
      }

      window.fetch(url)
        .then(data => {
          return data.json();
        })
        .then(result => {
          addGifs(result.data, gallery);
        });
    }, 1000);
  }
}

function addGifs (data, gallery) {
  data.forEach(gif => {
    // Gif/Video
    let vidurl = gif['images']['original_mp4']['mp4'];
    let video = document.createElement('video');
    video.src = vidurl;
    if (getAutoplaySetting()) {
      video.autoplay = true;
    } else {
      video.autoplay = false;
    }
    video.loop = true;
    gallery.appendChild(video);

    // Progressbar
    let gifPos = video.getBoundingClientRect();
    let progressbarContainer = document.createElement('div');
    progressbarContainer.classList.add('progressbar-container', 'hidden');
    let progressbar = document.createElement('div');
    progressbar.classList.add('progressbar');

    progressbarContainer.appendChild(progressbar);
    gallery.appendChild(progressbarContainer);

    video.addEventListener('mouseover', (e) => {
      e.target.nextSibling.classList.remove('hidden');
      e.target.play();
      setInterval(function () {
        e.target.nextSibling.firstChild.style.width = (e.target.currentTime / e.target.duration) * 100 + '%';
      }, 100 / 3);

    });
    video.addEventListener('mouseleave', (e) => {
      e.target.nextSibling.classList.add('hidden');
      e.target.pause();
    });
  });
}

export {search, addGifs};
