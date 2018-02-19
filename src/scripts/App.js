import Giphy from './utils/Giphy.js';
import Gallery from './components/Gallery.js';

export default class App {
  constructor () {
    this.giphy = new Giphy();

    this.gallery = new Gallery(document.querySelector('.gallery'));

    this.searchForm = document.querySelector('#search');
    this.searchForm.addEventListener('submit', this.onSubmit.bind(this));
  }

  onSubmit (event) {
    event.preventDefault();
    this.giphy.search(this.searchForm.querySelector('input').value)
      .then(response => {
        console.log(response);
        if (response.length === 0) {
          console.log('not found');
        } else {
          this.gallery.removeItems();
          response.forEach(gif => this.gallery.addItem(gif));
        }
      });
  }
}
