// Importando elementos da tela de popup
const openButtonImage = document.querySelector(".profile__add");
const popupImage = document.querySelector(".popup__newPlace");
const popupCloseButtonImage = popupImage.querySelector(".popup__close");
const popupSaveButtonImage = popupImage.querySelector(".popup__form_button");
const titleImage = document.querySelector(".popup__form_text_title");
const linkImage = document.querySelector(".popup__form_text_link");
const photos = document.querySelector(".photos");
const popupForm = popupImage.querySelector(".popup__formAdd");
const imageZoom = document.querySelector(".popup-img");
const closeButtonZoon = imageZoom.querySelector(".popup__close");

// Função para deixar a tela visivel
function toogleForm() {
  popupImage.classList.toggle("popup_visible");
  popupImage.classList.remove("popup_closing-animation");
}

// Função para remover tela
function toogleFormClose() {
  popupImage.classList.toggle("popup_closing-animation");
  setTimeout(() => {
    popupImage.classList.remove("popup_visible");
  }, 700);
}

// Deixa a tela do zoom da imagem visivel
function toogleFormImageZoom() {
  imageZoom.classList.toggle("popup-img_visible");
  imageZoom.classList.remove("popup_closing-animation");
}

// Remover zoom da imagem
function imageZoomClose() {
  imageZoom.classList.toggle("popup_closing-animation");
  setTimeout(() => {
    imageZoom.classList.remove("popup-img_visible");
  }, 700);
}

// Função para add novo cartão
function addNewCard(link, title) {
  const imageTemplate = document.querySelector("#photos").content;
  const imageElement = imageTemplate
    .querySelector(".photos__item")
    .cloneNode(true);
  imageElement.querySelector(".photo__img").src = link;
  imageElement.querySelector(".photo__img").alt = title;
  imageElement.querySelector(".photo__name").textContent = title;
  photos.prepend(imageElement);

  // Adicionando o butão do like
  imageElement
    .querySelector(".photo__likeButton_item")
    .addEventListener("click", function (event) {
      // adicionando a função de like para o novo card
      if (event.target.src.includes("_black.svg")) {
        event.target.src = "./images/like_button.svg";
      } else {
        event.target.src = "./images/like_button_black.svg";
      }
    });

  //adicionando a função do popup da imagem
  imageElement
    .querySelector(".photo__img")
    .addEventListener("click", function (event) {
      toogleFormImageZoom();
      imageZoom.querySelector(".popup-img__imagem").src = event.target.src;
      imageZoom.querySelector(".popup-img__title").textContent =
        event.target.alt;
    });

  // Adicionando a função de delete para o novo item;
  imageElement
    .querySelector(".photo__deleteButoon")
    .addEventListener("click", function () {
      imageElement.remove();
    });
}

// Função que chama addcard, quando cluca no botão de salvar.
function saveButton(event) {
  event.preventDefault();
  addNewCard(linkImage.value, titleImage.value);
  toogleForm();
}

popupForm.addEventListener("submit", saveButton);
openButtonImage.addEventListener("click", toogleForm);
popupCloseButtonImage.addEventListener("click", toogleFormClose);
closeButtonZoon.addEventListener("click", imageZoomClose);
