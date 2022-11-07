const ALERT_SHOW_TIME = 5000;

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

const checkMaxLengthString = (string, maxLength) =>
  string.length <= maxLength;

checkMaxLengthString('', 5);

const isEscapeKey = (evt) => evt.key === 'Escape';

const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = '100';
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = '250px';
  alertContainer.style.top = '20px';
  alertContainer.style.right = '250px';
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.lineHeight = 'normal';
  alertContainer.style.backgroundColor = 'red';
  alertContainer.style.borderRadius = '10px';

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
};

const isOutsideEvent = (evt) => evt.target.matches('section');

export { isEscapeKey, showAlert, isOutsideEvent };
