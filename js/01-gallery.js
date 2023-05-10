import { galleryItems } from "./gallery-items.js";
// Change code below this line
// console.log(galleryItems);

const galleryContainer = document.querySelector(`.gallery`);
let instance = {};

function createGalleryContainerMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
            <li class="gallery__item">
            <a class="gallery__link" href= "${original}">
            <img class="gallery__image"
            src="${preview}"
            data-source="${original}"
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

galleryContainer.addEventListener("click", (event) => {
  event.preventDefault();
  const largeImage = event.target.dataset.source;
  onOpenModal(largeImage);
});

// Подключение библиотеки basicLightbox

function onOpenModal(largeImage) {
  instance = basicLightbox.create(`
    <img width="800" height="600" src="${largeImage}">
`);
  instance.show();
  window.addEventListener("keydown", onEscKeyPress);
}

function onEscKeyPress(event) {
  if (event.code === "Escape") {
    onCloseModal();
  }
}

function onCloseModal() {
  window.removeEventListener("keydown", onEscKeyPress);
  instance.close();
}
console.log(galleryItems);
