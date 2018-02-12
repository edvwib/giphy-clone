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
          let data = result.data;
          console.log(data[0]);
          data.forEach(gif => {
            let imgurl = gif['images']['original']['url'];
            let img = document.createElement('img');
            img.src = imgurl;
            gallery.appendChild(img);
          });
        });
    }, 1000);
  }
}
