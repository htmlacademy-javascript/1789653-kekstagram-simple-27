import {getRandomNumber} from './util.js';

// Функция: Создания объекта фотографии
const createPhoto = (id) => ({
  id,
  url: `photos/${id}.jpg`,
  description: 'Описание фотографии',
  likes: getRandomNumber(15, 200),
  comments: getRandomNumber(0, 200)
});

const createPhotos = (count) => Array.from({length: count}, (_item, index) => createPhoto(index + 1));

createPhotos();

export {createPhotos};
