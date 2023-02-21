// Importando elementos da tela de popup
const openButtonImage = document.querySelector(".profile__add");
const popupImage = document.querySelector(".popup-newPlace");
const popupCloseButtonImage = popupImage.querySelector(".popup__close");
const popupSaveButtonImage = popupImage.querySelector(".popup__button");
const titleImage = document.querySelector(".popup__text_title");
const linkImage = document.querySelector(".popup__text_link");
const photos = document.querySelector(".photos");
const popupForm = popupImage.querySelector(".popup__formAdd");
const imageZoom = document.querySelector(".popup-img");
const closeButtonZoon = imageZoom.querySelector(".popup-img__close-button-img");

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

  // Adicionando o botão do like
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

  //adicionando a função do zoom da imagem
  imageElement
    .querySelector(".photo__img")
    .addEventListener("click", function (event) {
      buttonAbrirTelaZoom();
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

// Iniciando as chamadas de funções
// Função que chama addcard, quando clica no botão de salvar.
function saveButton(event) {
  event.preventDefault();
  addNewCard(linkImage.value, titleImage.value);
  buttonFecharTelaAdd();
}

// Função que chama abrir tela de adição de imagem
function buttonAbrirTelaAdd() {
  abrirTela(popupImage, "popup_visible");
}
// Função que chama fechar tela de adiação de imagem
function buttonFecharTelaAdd() {
  fecharTela(popupImage, "popup_visible");
}

// Função que chama abrir tela do zoom da imagem
function buttonAbrirTelaZoom() {
  abrirTela(imageZoom, "popup-img_visible");
}
// Função que chama fechar tela do zoom da imagem
function buttonFecharTelaZoom() {
  fecharTela(imageZoom, "popup-img_visible");
}

popupForm.addEventListener("submit", saveButton);
openButtonImage.addEventListener("click", buttonAbrirTelaAdd);
popupCloseButtonImage.addEventListener("click", buttonFecharTelaAdd);
closeButtonZoon.addEventListener("click", buttonFecharTelaZoom);
