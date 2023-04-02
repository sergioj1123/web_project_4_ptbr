export class FormValidator {
  constructor(objetctValidation, form) {
    this.formSelector = objetctValidation.formSelector;
    this.inputSelector = objetctValidation.inputSelector;
    this.submitButtonSelector = objetctValidation.submitButtonSelector;
    this.inputErrorClass = objetctValidation.inputErrorClass;
    this.errorClass = objetctValidation.errorClass;
    this.formElement = form;
  }

  enableValidation() {
    this._setEventListeners(this.formElement);
  }

  _setEventListeners() {
    const inputList = Array.from(
      this.formElement.querySelectorAll(this.inputSelector)
    );
    const buttonElement = this.formElement.querySelector(
      this.submitButtonSelector
    );
    this._toggleButtonState(inputList, buttonElement);
    inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._checkInputValidity(this.formElement, inputElement);
        this._toggleButtonState(inputList, buttonElement);
      });
    });
  }

  _hasInvalidInput(inputList) {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }

  _toggleButtonState(inputList, buttonElement) {
    if (this._hasInvalidInput(inputList)) {
      buttonElement.disabled = true;
    } else {
      buttonElement.disabled = false;
    }
  }

  _checkInputValidity(formElement, inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(
        formElement,
        inputElement,
        inputElement.validationMessage
      );
    } else {
      this._hideInputError(formElement, inputElement);
    }
  }

  _hideInputError(formElement, inputElement) {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(this.inputErrorClass);
    errorElement.classList.remove(this.errorClass);
    errorElement.textContent = "";
  }

  _showInputError(formElement, inputElement, errorMessage) {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(this.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this.errorClass);
  }
}
