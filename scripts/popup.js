// Importando elementos da tela de popup
const openPopupButton = document.querySelector(".profile__edit");
const popupScreen = document.querySelector(".popup__edit");
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
function abrirTela(scren, classVisibleName) {
  scren.classList.toggle(classVisibleName);
  scren.classList.remove("popup_closing-animation");
}

// Função para fechar a tela
function fecharTela(scren, classVisibleName) {
  scren.classList.toggle("popup_closing-animation");
  setTimeout(() => {
    scren.classList.remove(classVisibleName);
  }, 700);
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
  buttonFecharTela();
}

// Função que chama abrir tela de edição
function buttonAbrirTela() {
  abrirTela(popupScreen, "popup_visible");
}
// Função que chama fechar tela edição
function buttonFecharTela() {
  fecharTela(popupScreen, "popup_visible");
}

openPopupButton.addEventListener("click", buttonAbrirTela);
openPopupButton.addEventListener("click", openWhithName);
popupCloseButton.addEventListener("click", buttonFecharTela);
popupSaveButton.addEventListener("click", saveButton);
popupSaveButton.addEventListener("submit", saveButton);
