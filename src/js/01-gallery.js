
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";


const galleryEl = document.querySelector(".gallery");

const galleryImages = (galleryItems) => 
    galleryItems.map(({ preview, original, description }) => 
   `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}"/>
</a>`).join('');
 
galleryEl.insertAdjacentHTML("beforeend", galleryImages(galleryItems));


const lightbox = new SimpleLightbox('.gallery a', {
  captionDelay: 250,
  captionsData: "alt",
 });


console.log(galleryImages(galleryItems));

