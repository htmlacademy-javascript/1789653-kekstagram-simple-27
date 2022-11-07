import './picture.js';
import './user-form.js';
import { setUserFormSubmit, closeUserFile } from './user-modal.js';
import { createPictures } from './picture.js';
import { getData } from './api.js';

getData((pictures) => {
  createPictures(pictures);
});

setUserFormSubmit(closeUserFile);
