// Importando elementos da tela de popup
const openButtonImage = document.querySelector(".profile__add");
const popupImage = document.querySelector(".popup__newPlace");
const popupCloseButtonImage = popupImage.querySelector(".popup__close");
const popupSaveButtonImage = popupImage.querySelector(".popup__form_button");
const titleImage = document.querySelector(".popup__form_text_title");
const linkImage = document.querySelector(".popup__form_text_link");
const photos = document.querySelector(".photos");

// Função para deixar a tela visivel
function toogleForm() {
  popupImage.classList.toggle("popup_visible");
}

// Função para add novo cartão
function saveButton() {
  const imageTemplate = document.querySelector("#photos").content;
  const imageElement = imageTemplate
    .querySelector(".photos__item")
    .cloneNode(true);
  imageElement.querySelector(".photo__img").src = linkImage.value;
  imageElement.querySelector(".photo__img").alt = titleImage.value;
  imageElement.querySelector(".photo__name").content = titleImage.value;
  photos.prepend(imageElement);
  toogleForm();

  // Adicionando o novo elemento dentro do items
  items = document.querySelectorAll(".photo__likeButton_item");
  items[0].addEventListener("click", function () {
    // adicionando a função de alterar o botão de like apenas para o primeiro elemento do items, pois o restante já possui
    if (event.target.src.includes("_black.svg")) {
      event.target.src = "./images/like_button.svg";
    } else {
      event.target.src = "./images/like_button_black.svg";
    }
  });
}

popupSaveButtonImage.addEventListener("click", saveButton);
openButtonImage.addEventListener("click", toogleForm);
popupCloseButtonImage.addEventListener("click", toogleForm);
