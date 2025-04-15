import axios from 'axios';

function getImagesByQuery(query) {
  return axios.get('https://pixabay.com/api/', {
    params: {
      key: '49742644-34971ccc2760c2b4b43c41938',
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: 'true',
    },
  });
}
export default getImagesByQuery;
