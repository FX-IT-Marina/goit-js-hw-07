import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryContainer = document.querySelector(`.gallery`);

function createGalleryContainerMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
            <li class="gallery__item">
            <a class="gallery__link" href= "${original}">
            <img class="gallery__image"
            src="${preview}"
            alt="${description}"
            />
            </a>
            </li>
        `;
    })
    .join("");
}
const itemMarkup = createGalleryContainerMarkup(galleryItems);
galleryContainer.insertAdjacentHTML("beforeend", itemMarkup);
console.log(galleryItems);

// Подключение библиотеки SimpleLightbox

var lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
