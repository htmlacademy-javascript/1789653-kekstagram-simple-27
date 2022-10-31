import { isEscapeKey } from './util.js';
import { resetSetting } from './user-form.js';
import './picture-form-filter.js';

const userModalOpen = document.querySelector('#upload-file');
const userModalElement = document.querySelector('.img-upload__overlay');
const userModalClose = userModalElement.querySelector('#upload-cancel');
const body = document.querySelector('body');

const onFileEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    userModalElement.classList.add('hidden');
    body.classList.remove('modal-open');
    userModalOpen.value = '';
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
