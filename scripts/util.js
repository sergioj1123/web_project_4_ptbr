// Importando elementos da tela de popup
const openButtonImage = document.querySelector(".profile__add");
const popupImage = document.querySelector(".popup-newPlace");
const popupCloseButtonImage = popupImage.querySelector(".popup__close");
const titleImage = document.querySelector(".popup__text_title");
const linkImage = document.querySelector(".popup__text_link");
const popupForm = popupImage.querySelector(".popup__formAdd");
const imageZoom = document.querySelector(".popup-img");
const closeButtonZoon = imageZoom.querySelector(".popup-img__close-button-img");
import { closeClickingOutSide, openScreen, closeScreen } from "./index.js";
import { Card } from "./card.js";

// Função que chama addcard, quando clica no botão de salvar.
function saveButton(event) {
  event.preventDefault();
  const newImage = [{ name: titleImage.value, link: linkImage.value }];
  newImage.forEach((item) => {
    const card = new Card(item, "#photos");
    const cardElement = card.generateCard();
    // Adiciona ao DOM
    document.querySelector(".photos").append(cardElement);
  });
  closeScreenAddButton();
}

// Função que chama abrir tela de adição de imagem
function openScreenAddButton() {
  openScreen(popupImage, "popup_visible");
  closeClickingOutSide(popupImage);
}
// Função que chama fechar tela de adiação de imagem
export function closeScreenAddButton() {
  closeScreen(popupImage, "popup_visible");
}

// Função que chama abrir tela do zoom da imagem
export function openScreenZoomButton() {
  openScreen(imageZoom, "popup-img_visible");
  closeClickingOutSide(imageZoom);
}
// Função que chama fechar tela do zoom da imagem
export function closeScreenZoomButton() {
  closeScreen(imageZoom, "popup-img_visible");
}

popupForm.addEventListener("submit", saveButton);
openButtonImage.addEventListener("click", openScreenAddButton);
popupCloseButtonImage.addEventListener("click", closeScreenAddButton);
closeButtonZoon.addEventListener("click", closeScreenZoomButton);
