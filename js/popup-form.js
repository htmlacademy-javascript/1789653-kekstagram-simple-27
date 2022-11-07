import { isEscapeKey } from './util.js';
import { isOutsideEvent } from './util.js';
import { onFileEscKeydown } from './user-modal.js';

const createPopupMessage = (type, message, text) => {
  const alertTemplate = document.querySelector(`#${type}`).content.querySelector(`.${type}`);
  const popupAlert = alertTemplate.cloneNode(true);

  const closedAlertPopup = popupAlert.querySelector(`.${type}__button`);

  if (message) {
    popupAlert.querySelector(`${type}__title`).textContent = message;
    closedAlertPopup.textContent = text;
  }

  const popupEscKeydown = (evt) => {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      popupAlert.remove();

      if (closedAlertPopup) {
        document.addEventListener('keydown', onFileEscKeydown);
      }
      document.removeEventListener('keydown', popupEscKeydown);
    }
  };

  const popupOutsideEvent = (evt) => {
    if (isOutsideEvent(evt)) {
      evt.preventDefault();
      popupAlert.remove();
    }
  };

  if (closedAlertPopup) {
    document.removeEventListener('keydown', onFileEscKeydown);
  }

  const onClickButtonAlert = () => {
    popupAlert.remove();
    closedAlertPopup.removeEventListener('click', onClickButtonAlert);
    document.removeEventListener('click', popupOutsideEvent);
    document.removeEventListener('keydown', popupEscKeydown);
  };

  closedAlertPopup.addEventListener('click', onClickButtonAlert);
  document.addEventListener('click', popupOutsideEvent);
  document.addEventListener('keydown', popupEscKeydown);

  document.body.append(popupAlert);
};

export { createPopupMessage };
