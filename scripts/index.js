// Importando elementos da tela de popup
const openPopupButton = document.querySelector(".profile__edit");
const popupScreen = document.querySelector(".popup_edit");
const popupCloseButton = popupScreen.querySelector(".popup__close");
const popupSaveButton = popupScreen.querySelector(".popup__button");
const popupName = popupScreen.querySelector(".popup__text_name");
const popupProfession = popupScreen.querySelector(".popup__text_ocupation");
// Importando elementos da tela de profile
const profileName = document.querySelector(".profile__name");
const profileProfession = document.querySelector(".profile__profession");
import { closeScreenZoomButton, closeScreenAddButton } from "./util.js";
import { Card } from "./card.js";
import { FormValidator } from "./formValidator.js";

const initialCards = [
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg",
  },
  {
    name: "Vale de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg",
  },
  {
    name: "Montanhas Carecas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_latemar.jpg",
  },
  {
    name: "Parque Nacional da Vanoise ",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lago.jpg",
  },
];

const objetctValidation = {
  formSelector: ".popup__form",
  inputSelector: ".popup__text",
  submitButtonSelector: ".popup__button",
  inputErrorClass: "form__input_type_error",
  errorClass: "form__input-error_active",
};

// Função para deixar a tela visivel
export function openScreen(screen, classVisibleName) {
  screen.classList.toggle(classVisibleName);
  screen.classList.remove("popup_closing-animation");
}

// Função para fechar a tela
export function closeScreen(screen, classVisibleName) {
  screen.classList.toggle("popup_closing-animation");
  setTimeout(() => {
    screen.classList.remove(classVisibleName);
  }, 700);
}

// Função para a screen já abrir com o nome e ocupação
function openWithName(evt) {
  evt.preventDefault();
  popupName.value = profileName.textContent;
  popupProfession.value = profileProfession.textContent;
}

// Função do botão de salvar
function saveButton(evt) {
  evt.preventDefault();
  profileName.textContent = popupName.value;
  profileProfession.textContent = popupProfession.value;
  //   Também chamei a função de fechar a tela para que já feche quando clicar no salvar.
  closeScreenButton();
}

// Função que chama abrir tela de edição
function openScreenButton() {
  openScreen(popupScreen, "popup_visible");
  closeClickingOutSide(popupScreen);
}
// Função que chama fechar tela edição
function closeScreenButton() {
  closeScreen(popupScreen, "popup_visible");
}

// Função para fechar quando clica fora do popup
export function closeClickingOutSide(className) {
  window.addEventListener("click", ({ target }) => {
    if (
      className.classList.contains("popup-img_visible") ||
      className.classList.contains("popup_visible")
    ) {
      if (target.classList.contains("popup-img")) {
        closeScreenZoomButton();
      }
      if (target.classList.contains("popup-newPlace")) {
        closeScreenAddButton();
      }
      if (target.classList.contains("popup_edit")) {
        closeScreenButton();
      }
    }
  });
}

function closePopupEsc() {
  document.onkeydown = function (e) {
    if (e.key === "Escape") {
      closeScreenZoomButton();
      closeScreenAddButton();
      closeScreenButton();
    }
  };
}

closePopupEsc();

// Criando cards iniciais
initialCards.forEach((item) => {
  const card = new Card(item, "#photos");
  const cardElement = card.generateCard();

  // Adiciona ao DOM
  document.querySelector(".photos").append(cardElement);
});

// Chamando a validação dos formularios
const startFormValidation = (objetctValidation) => {
  const formList = Array.from(
    document.querySelectorAll(objetctValidation.formSelector)
  );
  formList.forEach((formElement) => {
    formElement.addEventListener("submit", function (evt) {
      evt.preventDefault();
    });
    const validateForm = new FormValidator(objetctValidation, formElement);
    validateForm.enableValidation();
  });
};

startFormValidation(objetctValidation);

openPopupButton.addEventListener("click", openScreenButton);
openPopupButton.addEventListener("click", openWithName);
popupCloseButton.addEventListener("click", closeScreenButton);
popupSaveButton.addEventListener("click", saveButton);
popupSaveButton.addEventListener("submit", saveButton);
