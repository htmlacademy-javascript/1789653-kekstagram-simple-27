import { showAlert } from './util.js';
const getData = (onSuccess) => {
  fetch('https://27.javascript.pages.academy/kekstagram-simple/data')
    .then((response) => response.json())
    .then((pictures) => {
      onSuccess(pictures);
    })
    .catch(() =>
      showAlert('ОЙ... Что-то пошло не так! Попробуйте перезагрузить страницу!')
    );
};

const sendData = (onSuccess, onFail, body) => {
  fetch('https://27.javascript.pages.academy/kekstagram-simple',
    {
      method: 'POST',
      body,
    },
  )
    .then((response) => response.ok ? onSuccess() : onFail('Не удалось отправить форму! Попрбуйти ещё раз!')
    )
    .catch(() => {
      onFail('Не удалось отправить форму. Попрбуйти ещё раз.');
    });
};

export { getData, sendData };

