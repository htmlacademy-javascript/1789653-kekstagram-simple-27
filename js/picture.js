import { createPhotos } from './data.js';

const userPhotos = document.querySelector('.pictures');
const picture = document.querySelector('#picture').content.querySelector('.picture');

const similarPhotos = createPhotos();

const similarListFragment = document.createDocumentFragment();

const createPictures = (elements) => {
  elements.forEach(({ url, likes, comments }) => {
    const pictureElement = picture.cloneNode(true);
    pictureElement.querySelector('.picture__img').src = url;
    pictureElement.querySelector('.picture__likes').textContent = likes;
    pictureElement.querySelector('.picture__comments').textContent = comments;
    similarListFragment.append(pictureElement);
  });
  userPhotos.append(similarListFragment);
};

createPictures(similarPhotos);
