// Функция: Получения случайного числа из диапазона
const getRandomNumber = (min, max) => {
  if (min < 0 || max < 0) {
    return NaN;
  }
  if (min > max) {
    const NUMBER = min;
    min = max;
    max = NUMBER;
  }
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
};

getRandomNumber(10, 5);

// Функция: Проверке длины строки
const checkMaxLengthString = (string, maxLength) =>
  string.length <= maxLength;

checkMaxLengthString('', 5);

const SIMILAR_WIZARD_COUNT = 25;

// Функция: Создания объекта фотографии
const createPhoto = (id) => ({
  id,
  url: `photos/${id}.jpg`,
  description: 'Описание фотографии',
  likes: getRandomNumber(15, 200),
  comments: getRandomNumber(0, 200)
});

const createPhotos = Array.from({length: SIMILAR_WIZARD_COUNT}, (item, index) => createPhoto(index + 1));

