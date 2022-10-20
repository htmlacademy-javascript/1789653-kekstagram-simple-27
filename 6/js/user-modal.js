import './picture.js';
import { isEscapeKey } from './util.js';

const userModalOpen = document.querySelector('#upload-file');
const userModalElement = document.querySelector('.img-upload__overlay');
const userModalClose = userModalElement.querySelector('#upload-cancel');
const body = document.querySelector('body');

const onFileEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeUserFile();
  }
};

function openUserFile () {
  userModalElement.classList.remove('hidden');
  body.classList.add('modal-open');

  document.addEventListener('keydown', onFileEscKeydown);
}

function closeUserFile () {
  userModalElement.classList.add('hidden');
  body.classList.remove('modal-open');

  document.removeEventListener('keydown', onFileEscKeydown);
}

userModalOpen.addEventListener('click', () => {
  openUserFile();
});

userModalClose.addEventListener('click', () => {
  closeUserFile();
});
