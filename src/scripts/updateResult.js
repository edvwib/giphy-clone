let timeOut;
export default function (query){
  if(query.length > 0){
    clearTimeout(timeOut);
    timeOut = setTimeout(() => {
      const apiKey = 'gPUGVC81TiJn8FV4ZTnfM32wji8sBltf';
      let url = `http://api.giphy.com/v1/gifs/search?q=${query}&api_key=${apiKey}&limit=5`;

      const gallery = document.querySelector('.gallery');
      if (gallery.children.length > 0) { //Clear gallery of previuos gifs
        while (gallery.firstChild) {
          gallery.removeChild(gallery.firstChild);
        }
      }

      fetch(url)
        .then(data => {
          return data.json();
        })
        .then(result => {
          addGifs(result.data, gallery);
        });
    }, 1000);
  }
}

function addGifs(data, gallery){
  data.forEach(gif => {
    let vidurl = gif['images']['original_mp4']['mp4'];
    let video = document.createElement('video');
    video.src = vidurl;
    video.autoplay = true;
    video.loop = true;
    gallery.appendChild(video);
    let progress = document.createElement('span');
    progress.classList.add('gif-progress');
    gallery.appendChild(progress);
  });
}
