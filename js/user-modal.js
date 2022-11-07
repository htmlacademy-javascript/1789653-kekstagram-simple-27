import './picture-form-filter.js';
import { isEscapeKey, showAlert } from './util.js';
import { resetSetting } from './user-form.js';
import { sendData } from './api.js';
import { createPopupMessage } from './popup-form.js';

const uploadSelectImage = document.querySelector('#upload-select-image');
const userModalOpen = uploadSelectImage.querySelector('#upload-file');
const userModalElement = uploadSelectImage.querySelector('.img-upload__overlay');
const userModalClose = userModalElement.querySelector('#upload-cancel');
const uploadSubmitButton = document.querySelector('#upload-submit');
const body = document.querySelector('body');

const onFileEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();

    userModalElement.classList.add('hidden');
    body.classList.remove('modal-open');
    uploadSelectImage.reset();
  }
};

const openUserFile = () => {
  userModalElement.classList.remove('hidden');
  body.classList.add('modal-open');

  document.addEventListener('keydown', onFileEscKeydown);
  resetSetting();
};

const closeUserFile = () => {
  userModalElement.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onFileEscKeydown);
};

userModalOpen.addEventListener('change', openUserFile);
userModalClose.addEventListener('click', closeUserFile);


const blockSubmitButton = () => {
  uploadSubmitButton.disabled = true;
  uploadSubmitButton.textContent = 'Опубликовываю...';
};

const unBlockSubmitButton = () => {
  uploadSubmitButton.disabled = false;
  uploadSubmitButton.textContent = 'Опубликовать';
};

const setUserFormSubmit = (onSeccess) => {
  uploadSelectImage.addEventListener('submit', (evt) => {
    evt.preventDefault();
    blockSubmitButton();
    sendData(
      () => {
        onSeccess();
        unBlockSubmitButton();
        uploadSelectImage.reset();
        createPopupMessage('success');
      },
      () => {
        showAlert('Не удалось отправить файл! Попрбуйти ещё раз!');
        unBlockSubmitButton();
        createPopupMessage('error');
      },
      new FormData(evt.target),
    );
  });
};

export { setUserFormSubmit, closeUserFile, onFileEscKeydown };

