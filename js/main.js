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

const DESCRIPTIONS = [
  'photo.1',
  'photo.2',
  'photo.3',
  'photo.4',
  'photo.5',
  'photo.6',
  'photo.7',
  'photo.8',
  'photo.9',
  'photo.10',
  'photo.11',
  'photo.12',
  'photo.13',
  'photo.14',
  'photo.15',
  'photo.16',
  'photo.17',
  'photo.18',
  'photo.19',
  'photo.20',
  'photo.21',
  'photo.22',
  'photo.23',
  'photo.24',
  'photo.25',
];

const SIMILAR_PHOTO_COUNT = 25;

// Функция: Создание массива элементов id
const createId = () => {
  const listsId = [];

  for (let i = 1; i < SIMILAR_PHOTO_COUNT + 1; i++) {
    const id = i;
    listsId.push(id);
  }
  return listsId;
};

// Функция: Получение случайного элемента массива
const getRandomElementArray = (elements) =>
  elements[getRandomNumber(0, elements.length - 1)];

// Функция: Получения нового массива из старого
const shufflingArray = (array) => {
  const mixArray = array.slice();
  for (let i = mixArray.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    const stepValue = mixArray[i];
    mixArray[i] = mixArray[randomIndex];
    mixArray[randomIndex] = stepValue;
  }
  return mixArray;
};

// Функция: Возвращающая массив объектов фотографий
const createPhoto = () => {
  const photos = [];
  const photosId = shufflingArray(createId());

  for (let i = 0; i < SIMILAR_PHOTO_COUNT; i++) {
    photos.push({
      id: photosId[i],
      url: `photos/${photosId[i]}.jpg`,
      description: getRandomElementArray(DESCRIPTIONS),
      likes: getRandomNumber(15, 200),
      comments: getRandomNumber(0, 200)
    });
  }
  return photos;
};

createPhoto();
