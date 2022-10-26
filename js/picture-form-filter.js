import './user-form.js';
const uploadPreview = document.querySelector('.img-upload__preview');
const effectsRadios = document.querySelectorAll('.effects__radio');

const setEffectClass = (className) => {
  uploadPreview.classList = '';
  uploadPreview.classList.add(className);
};
const removeEffectSetting = () => {
  uploadPreview.classList = '';
  uploadPreview.style.filter = '';
};

const effectFilter = () => {
  for (const effectsRadio of effectsRadios) {
    effectsRadio.addEventListener('change', (evt) => {
      const target = evt.target.value;
      switch (true) {
        case (target === 'none'):
          removeEffectSetting();
          break;
        case (target === 'chrome'):
          removeEffectSetting();
          setEffectClass('effects__preview--chrome');
          break;
        case (target === 'sepia'):
          removeEffectSetting();
          setEffectClass('effects__preview--sepia');
          break;
        case (target === 'marvin'):
          removeEffectSetting();
          setEffectClass('effects__preview--marvin');
          break;
        case (target === 'phobos'):
          removeEffectSetting();
          setEffectClass('effects__preview--phobos');
          break;
        case (target === 'heat'):
          removeEffectSetting();
          setEffectClass('effects__preview--heat');
          break;
      }
    });
  }
};
effectFilter();
