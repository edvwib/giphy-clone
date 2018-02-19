import { GIPHY_API_KEY } from '../config';

export default class Giphy {
  search (query) {
    let url = `http://api.giphy.com/v1/gifs/search?q=${query}&api_key=${GIPHY_API_KEY}&limit=5`;

    return window.fetch(url)
      .then(data => {
        return data.json();
      })
      .then(result => {
        return result.data;
      });
  }
}
