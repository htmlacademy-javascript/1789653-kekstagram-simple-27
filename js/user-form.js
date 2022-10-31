import { removeEffectSetting } from './picture-form-filter.js';

const controlSmaller = document.querySelector('.scale__control--smaller');
const controlBigger = document.querySelector('.scale__control--bigger');
const controlValue = document.querySelector('.scale__control--value');
const uploadPreview = document.querySelector('.img-upload__preview img');

const resetSetting = () => {
  controlValue.value = '100%';
  uploadPreview.style.transform = 'scale(1.00)';
  removeEffectSetting();
};

const MIN_CONTROL_SMALLER = 25;
const MAX_CONTROL_BIGGER = 100;
const STEP_CONTROL = 25;

const setScaleValuePicture = () => {
  const values = parseFloat(controlValue.value);
  uploadPreview.style.transform = `scale(${values / 100})`;
};

const minScaleClickHandler = () => {
  const currentValue = parseFloat(controlValue.value);
  if (currentValue === MIN_CONTROL_SMALLER) {
    return false;
  }
  controlValue.value = `${currentValue - STEP_CONTROL}%`;
  setScaleValuePicture();
};

const maxScaleClickHandler = () => {
  const currentValue = parseFloat(controlValue.value);
  if (currentValue === MAX_CONTROL_BIGGER) {
    return false;
  }
  controlValue.value = `${currentValue + STEP_CONTROL}%`;
  setScaleValuePicture();
};
controlSmaller.addEventListener('click', minScaleClickHandler);
controlBigger.addEventListener('click', maxScaleClickHandler);

export { resetSetting };
