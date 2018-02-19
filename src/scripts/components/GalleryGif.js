export default class GalleryGif {
  constructor (link) {
    this.element = document.createElement('video');

    this.element.src = link;
    this.element.autoplay = true;
    this.element.loop = true;

    this.element.classList.add('gallery__item');

    return this.element;
  }
}
