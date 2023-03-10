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

// Função para deixar a tela visivel
function openScreen(screen, classVisibleName) {
  screen.classList.toggle(classVisibleName);
  screen.classList.remove("popup_closing-animation");
}

// Função para fechar a tela
function closeScreen(screen, classVisibleName) {
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
}
// Função que chama fechar tela edição
function closeScreenButton() {
  closeScreen(popupScreen, "popup_visible");
}

openPopupButton.addEventListener("click", openScreenButton);
openPopupButton.addEventListener("click", openWithName);
popupCloseButton.addEventListener("click", closeScreenButton);
popupSaveButton.addEventListener("click", saveButton);
popupSaveButton.addEventListener("submit", saveButton);
