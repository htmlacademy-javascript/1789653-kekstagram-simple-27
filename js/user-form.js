import { removeEffectSetting } from './picture-form-filter.js';
const MIN_CONTROL_SMALLER = 25;
const MAX_CONTROL_BIGGER = 100;
const STEP_CONTROL = 25;

const controlSmaller = document.querySelector('.scale__control--smaller');
const controlBigger = document.querySelector('.scale__control--bigger');
const controlValue = document.querySelector('.scale__control--value');
const uploadPreview = document.querySelector('.img-upload__preview img');

const resetSetting = () => {
  controlValue.value = '100%';
  uploadPreview.style.transform = 'scale(1.00)';
  removeEffectSetting();
};

const setScaleValuePicture = () => {
  const values = parseFloat(controlValue.value);
  uploadPreview.style.transform = `scale(${values / 100})`;
};

const onMinScaleClick = () => {
  const currentValue = parseFloat(controlValue.value);
  if (currentValue === MIN_CONTROL_SMALLER) {
    return false;
  }
  controlValue.value = `${currentValue - STEP_CONTROL}%`;
  setScaleValuePicture();
};

const onMaxScaleClick = () => {
  const currentValue = parseFloat(controlValue.value);
  if (currentValue === MAX_CONTROL_BIGGER) {
    return false;
  }
  controlValue.value = `${currentValue + STEP_CONTROL}%`;
  setScaleValuePicture();
};
controlSmaller.addEventListener('click', onMinScaleClick);
controlBigger.addEventListener('click', onMaxScaleClick);

export { resetSetting };
