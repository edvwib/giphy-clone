import GalleryGif from './GalleryGif.js';

export default class Gallery {
  constructor (element) {
    this.element = element;
  }

  addItem (item) {
    let gif = new GalleryGif(item['images']['original_mp4']['mp4']);

    this.element.appendChild(gif);
  }

  removeItems () {
    while (this.element.firstChild) {
      this.element.removeChild(this.element.firstChild);
    }
  }
}
