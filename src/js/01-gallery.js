// Add imports above this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';
// Change code below this line

const gallery = document.querySelector('.gallery');

const createMarkup = data => {
  return data
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" title="${description}" />
   </a>
</li>`;
    })
    .join('');
};

const createGallery = data => {
  const markup = createMarkup(data);
  gallery.insertAdjacentHTML('beforeend', markup);
};

createGallery(galleryItems);

const lightBox = new SimpleLightbox('.gallery a', {
  captionSelector: 'img',
  captionsData: 'title',
  captionPosition: 'bottom',
  captionDelay: 250,
});
