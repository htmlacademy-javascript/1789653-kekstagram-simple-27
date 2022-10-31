import { resetSetting } from './user-form.js';

const uploadPreview = document.querySelector('.img-upload__preview img');
const effectsRadios = document.querySelectorAll('.effects__radio');
const effectLevelValue = document.querySelector('.effect-level__value');
const effectLevelSlider = document.querySelector('.effect-level__slider');
const effectLevel = document.querySelector('.effect-level');

let currentEffect = '';
let measureUnit = '';
const DEFAULT_VALUE = 100;

const effectIntensity = {
  'none': {
    RANGE: {
      MIN: 0,
      MAX: 1,
    },
    START: 0,
    STEP: 0.1,
    EFFECT: '',
    MEASURE_UNIT: '',
  },
  'chrome': {
    RANGE: {
      MIN: 0,
      MAX: 1,
    },
    START: 0,
    STEP: 0.1,
    EFFECT: 'grayscale',
    MEASURE_UNIT: '',
  },
  'sepia': {
    RANGE: {
      MIN: 0,
      MAX: 1,
    },
    START: 0,
    STEP: 0.1,
    EFFECT: 'sepia',
    MEASURE_UNIT: '',
  },
  'marvin': {
    RANGE: {
      MIN: 0,
      MAX: 100,
    },
    START: 0,
    STEP: 1,
    EFFECT: 'invert',
    MEASURE_UNIT: '%',
  },
  'phobos': {
    RANGE: {
      MIN: 0,
      MAX: 3,
    },
    START: 0,
    STEP: 0.1,
    EFFECT: 'blur',
    MEASURE_UNIT: 'px',
  },
  'heat': {
    RANGE: {
      MIN: 1,
      MAX: 3,
    },
    START: 0,
    STEP: 0.1,
    EFFECT: 'brightness',
    MEASURE_UNIT: '',
  },
};

const optionIntensity = ({ RANGE: { MIN, MAX }, START, STEP, EFFECT, MEASURE_UNIT }, startValue, display) => {
  currentEffect = EFFECT;
  measureUnit = MEASURE_UNIT;
  effectLevelSlider.noUiSlider.updateOptions({
    range: {
      min: MIN,
      max: MAX,
    },
    start: START,
    step: STEP,
  });
  effectLevelSlider.noUiSlider.set(startValue);
  effectLevel.style.display = display;
};

const removeEffectSetting = () => {
  uploadPreview.classList = '';
  uploadPreview.style.filter = '';
  optionIntensity(effectIntensity.none, DEFAULT_VALUE, 'none');
};

noUiSlider.create(effectLevelSlider, {
  range: {
    min: 0,
    max: 100,
  },
  start: 100,
  step: 0.1,
  connect: 'lower',
});

effectLevelSlider.noUiSlider.on('update', (_item, handle, unencoded) => {
  uploadPreview.style.filter = `${currentEffect}(${unencoded[handle]}${measureUnit})`;
  effectLevelValue.setAttribute('value', unencoded[handle]);
});

const setEffectClass = (className) => {
  uploadPreview.classList = '';
  uploadPreview.classList.add(className);
};

effectsRadios.forEach((effectItem) => {
  effectItem.addEventListener('change', (evt) => {
    const target = evt.currentTarget.value;
    setEffectClass(`effects__preview--${effectItem.value}`);
    optionIntensity(effectIntensity[target], DEFAULT_VALUE, 'block');
    if (target === 'none') {
      resetSetting();
    }
  });
});

export { removeEffectSetting };
