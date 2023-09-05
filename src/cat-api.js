import axios from 'axios';
import { hideSelect } from './select.js';

const KEY =
  'live_7vJxNfsiflTXSYqNycxb1TTurtzYvdIJQpnQqaDLFgRPdohFrlbokQHrEHJZCpLM';

axios.defaults.headers.common['x-api-key'] = KEY;

const options = {
  headers: {
    'x-api-key': KEY,
  },
};

export function fetchBreeds() {
  hideSelect();
  const url = 'https://api.thecatapi.com/v1/breeds';
  return fetch(url, options).then(response => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.json();
  });
}

export function fetchCatByBreed(breedId) {
  const url = `https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`;

  return fetch(url, options).then(response => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.json();
  });
}
