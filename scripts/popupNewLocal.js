// Importando elementos da tela de popup
const openButtonImage = document.querySelector(".profile__add");
const popupImage = document.querySelector(".popup__newPlace");
const popupCloseButtonImage = popupImage.querySelector(".popup__close");
const popupSaveButtonImage = popupImage.querySelector(".popup__form_button");
const titleImage = document.querySelector(".popup__form_text_title");
const linkImage = document.querySelector(".popup__form_text_link");
const photos = document.querySelector(".photos");
const popupForm = popupImage.querySelector(".popup__formAdd");

// Função para deixar a tela visivel
function toogleForm() {
  popupImage.classList.toggle("popup_visible");
}

// Função para add novo cartão
function addNewCard(link, title) {
  const imageTemplate = document.querySelector("#photos").content;
  const imageElement = imageTemplate
    .querySelector(".photos__item")
    .cloneNode(true);
  imageElement.querySelector(".photo__img").src = link;
  imageElement.querySelector(".photo__img").alt = title;
  imageElement.querySelector(".photo__name").content = title;
  photos.prepend(imageElement);

  // Adicionando o novo elemento dentro do items
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
popupCloseButtonImage.addEventListener("click", toogleForm);
