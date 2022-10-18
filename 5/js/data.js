import {getRandomNumber} from './util.js';

const SIMILAR_PHOTO_COUNT = 25;

// Функция: Создания объекта фотографии
const createPhoto = (id) => ({
  id,
  url: `photos/${id}.jpg`,
  description: 'Описание фотографии',
  likes: getRandomNumber(15, 200),
  comments: getRandomNumber(0, 200)
});

const createPhotos = () => Array.from({length: SIMILAR_PHOTO_COUNT}, (_item, index) => createPhoto(index + 1));

createPhotos();

export {createPhotos};
