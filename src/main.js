import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import getImagesByQuery from './js/pixabay-api.js';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from '/js/render-functions.js';

const form = document.querySelector('.form');
form.addEventListener('submit', handlSubmit);
function handlSubmit(event) {
  event.preventDefault();

  clearGallery();

  const query = form.elements['search-text'].value.trim();
  if (!query) {
    form.reset();
    iziToast.error({
      message: 'Please fill in the search field!',
      position: 'topRight',
      backgroundColor: '#ef4040',
    });
    return;
  }

  const searchText = event.target.elements['search-text'].value;

  showLoader();

  getImagesByQuery(searchText)
    .then(response => {
      if (response.data.hits.length === 0) {
        iziToast.error({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
          backgroundColor: '#ef4040',
        });
      }
      hideLoader();
      createGallery(response.data.hits);
    })
    .catch(error => {
      console.log(error);
      iziToast.error({
        message: 'Something went wrong.Please try again later!',
        position: 'topRight',
        backgroundColor: '#ef4040',
      });
      hideLoader();
    });
}
