'use strict';
(() => {
  const countOfComments = 5;
  const bigPicture = document.querySelector(`.big-picture`);
  const bigPictureImg = bigPicture.querySelector(`img`);
  const closeButton = document.querySelector(`#picture-cancel`);
  const likesCount = bigPicture.querySelector(`.likes-count`);
  const commentsCount = bigPicture.querySelector(`.comments-count`);
  const commentsContainer = bigPicture.querySelector(`.social__comments`);
  const comments = commentsContainer.querySelectorAll(`.social__comment`);


  const onPopupEscPress = (evt) => {
    if (evt.key === `Escape`) {
      closePopup();
    }
  };
  const closePopup = () => {
    bigPicture.classList.add(`hidden`);
    document.removeEventListener(`keydown`, onPopupEscPress);
  };
  const createBigPicture = (data) => {
    bigPictureImg.src = data.url;
    likesCount.textContent = data.likes;
    commentsCount.textContent = data.comments.length;
    for (let i = 0; i < countOfComments; i++) {
        comments[i].querySelector(`img`).src = data.comments.avatar;
        
    }
  };
  const openPopup = (index) => {
    createBigPicture(window.data[index]);
    bigPicture.classList.remove(`hidden`);
    closeButton.addEventListener(`click`, closePopup);
    document.addEventListener(`keydown`, onPopupEscPress);
  };
  window.bigPicture = {
    openPopup,
  };
})();
