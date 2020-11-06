'use strict';
(() => {


  const photoTemplate = document.querySelector(`#picture`).content.querySelector(`.picture`);
  const picturesContainer = document.querySelector(`.pictures`);

  const createPhoto = (data) => {
    const newPhoto = photoTemplate.cloneNode(true);
    const photoImg = newPhoto.querySelector(`img`);
    const likeElement = newPhoto.querySelector(`.picture__likes`);
    const commentElement = newPhoto.querySelector(`.picture__comments`);
    likeElement.textContent = data.likes;
    commentElement.textContent = data.comments.length;
    photoImg.src = data.url;
    return newPhoto;
  };
  window.renderPhotos = (data) => {
    const fragment = document.createDocumentFragment();
    for (let i = 0; i < data.length; i++) {
      fragment.appendChild(createPhoto(data[i]));
    }
    picturesContainer.appendChild(fragment);
    const pictures = picturesContainer.querySelectorAll(`.picture`);
    for (let i = 0; i < pictures.length; i++) {
      pictures[i].addEventListener(`click`, () => window.bigPicture.openPopup(i));
    }
  };
  // setTimeout(renderPhotos, 3000, window.data);
})();
