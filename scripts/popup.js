// Importando elementos da tela de popup
const openPopupButton = document.querySelector(".profile__edit");
const popupScreen = document.querySelector(".popup");
const popupCloseButton = popupScreen.querySelector(".popup__close");
const popupSaveButton = popupScreen.querySelector(".popup__form_button");
const popupName = popupScreen.querySelector(".popup__form_text_name");
const popupProfession = popupScreen.querySelector(
  ".popup__form_text_ocupation "
);
// Importando elementos da tela de profile
const profileName = document.querySelector(".profile__name");
const profileProfession = document.querySelector(".profile__profession");

// Função para deixar a tela visivel
function toogleForm() {
  popupScreen.classList.toggle("popup_visible");
}

// Função para a screen já abrir com o nome e ocupação
function openWhithName(evt) {
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
  toogleForm();
}

openPopupButton.addEventListener("click", toogleForm);
openPopupButton.addEventListener("click", openWhithName);
popupCloseButton.addEventListener("click", toogleForm);
popupSaveButton.addEventListener("click", saveButton);
popupSaveButton.addEventListener("submit", saveButton);
