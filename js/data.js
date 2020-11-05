'use strict';
(() => {
  const TIMEOUT = 3000;
  const GET_URL = `https://21.javascript.pages.academy/kekstagram/data`;
  const RequestMethod = {
    GET: `GET`,
    POST: `POST`,
  };
  const xhrStatusCode = {
    OK: 200,
  };
  const xhrLoad = new XMLHttpRequest;
  const xhrOnLoad = (onSuccess, onError, xhr) => {
    xhr.responseType = `json`;
    xhr.addEventListener(`load`, () => {
      if (xhr.status === xhrStatusCode.OK) {
        onSuccess(xhr.response);
      } else {
        onError(`Статус ответа: ${xhr.status} ${xhr.statusText}`);
      }
      xhr.addEventListener(`error`, () => {
        onError(`Произошла ошибка соединения`);
      });
      xhr.addEventListener(`timeout`, () => {
        onError(`запрос не успел выполнить за ${xhr.timeout}мс`);
      });
      xhr.timeout = TIMEOUT;
    });
  };
  const load = (onSuccess, onError) => {
    xhrLoad.open(RequestMethod.GET, GET_URL);
    xhrOnLoad(onSuccess, onError, xhrLoad);
    xhrLoad.send();
  };
  const successLoad = (data) => {
    window.data = data;
  };
  load(successLoad);

})();
