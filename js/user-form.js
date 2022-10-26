const userModalElement = document.querySelector('.img-upload__overlay');
const controlSmaller = userModalElement.querySelector('.scale__control--smaller');
const controlBigger = userModalElement.querySelector('.scale__control--bigger');
const controlValue = userModalElement.querySelector('.scale__control--value');
const uploadPreview = userModalElement.querySelector('.img-upload__preview');

const MIN_CONTROL_SMALLER = 25;
const MAX_CONTROL_BIGGER = 100;
const STEP_CONTROL = 25;

controlValue.value = `${100}%`;

const setScaleValuePicture = (elementValue) => {
  switch (true) {
    case (elementValue === `${100}%`):
      uploadPreview.style = 'transform: scale(1.0)';
      break;
    case (elementValue === `${75}%`):
      uploadPreview.style = 'transform: scale(0.75)';
      break;
    case (elementValue === `${50}%`):
      uploadPreview.style = 'transform: scale(0.50)';
      break;
    case (elementValue === `${25}%`):
      uploadPreview.style = 'transform: scale(0.25)';
      break;
  }
};

const minScaleClickHandler = () => {
  const currentValue = parseFloat(controlValue.value);
  if (currentValue === MIN_CONTROL_SMALLER) {
    return false;
  }
  controlValue.value = `${currentValue - STEP_CONTROL}%`;
  setScaleValuePicture(controlValue.value);
};

const maxScaleClickHandler = () => {
  const currentValue = parseFloat(controlValue.value);
  if (currentValue === MAX_CONTROL_BIGGER) {
    return false;
  }
  controlValue.value = `${currentValue + STEP_CONTROL}%`;
  setScaleValuePicture(controlValue.value);
};

controlSmaller.addEventListener('click', minScaleClickHandler);
controlBigger.addEventListener('click', maxScaleClickHandler);

