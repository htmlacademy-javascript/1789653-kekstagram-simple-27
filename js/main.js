function getRandomNumber(min, max) {
  if (min < 0 || max < 0) {
    return NaN;
  }
  if (min > max) {
    const number = min;
    min = max;
    max = number;
  }
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}
getRandomNumber(10, 5);
