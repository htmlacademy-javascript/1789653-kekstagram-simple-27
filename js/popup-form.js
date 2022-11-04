import { isEscapeKey } from './util.js';

const successTemplate = document.querySelector('#success').content.querySelector('.success');
const errorTemplate = document.querySelector('#error').content.querySelector('.error');
const errorButton = errorTemplate.querySelector('.error__button');

const createSuccessPopup = () => {
  const successPopup = successTemplate.cloneNode(true);
  document.body.append(successPopup);

  const onPopupEscKeydown = (evt) => {
    evt.preventDefault();
    if (isEscapeKey) {
      successPopup.remove();
      document.removeEventListener('keydown', onPopupEscKeydown);
    }
  };
  document.addEventListener('keydown', onPopupEscKeydown);
  successPopup.addEventListener('click', () => {
    successPopup.remove();
    document.removeEventListener('keydown', onPopupEscKeydown);
  });
};

const createErrorPopup = () => {
  const errorPopup = errorTemplate.cloneNode(true);
  document.body.append(errorPopup);

  const onPopupEscKeydown = (evt) => {
    evt.preventDefault();
    if (isEscapeKey) {
      errorPopup.remove();
      document.removeEventListener('keydown', onPopupEscKeydown);
    }
  };

  document.addEventListener('keydown', onPopupEscKeydown);
  errorPopup.addEventListener('click', () => {
    errorPopup.remove();
    document.removeEventListener('keydown', onPopupEscKeydown);
  });
  errorButton.addEventListener('mousedown', () => {
    errorPopup.remove();
    document.removeEventListener('keydown', onPopupEscKeydown);
  });
};

export { createSuccessPopup, createErrorPopup };
