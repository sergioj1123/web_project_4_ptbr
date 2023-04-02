import { openScreenZoomButton } from "./util.js";
export class Card {
  constructor(data, template) {
    this.src = data.link;
    this.alt = data.name;
    this.textContent = data.name;
    this._cardSelector = template;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content.querySelector(".photos__item")
      .cloneNode(true);

    return cardElement;
  }

  generateCard() {
    this._element = this._getTemplate();
    this._likeButton();
    this._zoomOnClickCard();
    this._deleteButton();

    this._element.querySelector(".photo__img").src = this.src;
    this._element.querySelector(".photo__img").alt = this.alt;
    this._element.querySelector(".photo__name").textContent = this.textContent;

    return this._element;
  }

  _likeButton() {
    this._element
      .querySelector(".photo__likeButton_item")
      .addEventListener("click", function (event) {
        // adicionando a função de like para o novo card
        if (event.target.src.includes("_black.svg")) {
          event.target.src = "./images/like_button.svg";
        } else {
          event.target.src = "./images/like_button_black.svg";
        }
      });
  }

  _zoomOnClickCard() {
    const imageZoom = document.querySelector(".popup-img");
    this._element
      .querySelector(".photo__img")
      .addEventListener("click", function (event) {
        openScreenZoomButton();
        imageZoom.querySelector(".popup-img__imagem").src = event.target.src;
        imageZoom.querySelector(".popup-img__title").textContent =
          event.target.alt;
      });
  }

  _deleteButton() {
    this._element
      .querySelector(".photo__deleteButoon")
      .addEventListener("click", () => {
        this._element.remove();
      });
  }
}
