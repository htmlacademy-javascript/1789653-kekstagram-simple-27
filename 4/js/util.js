import './main.js';

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

export {getRandomNumber};
