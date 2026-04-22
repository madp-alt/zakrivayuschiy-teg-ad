document.addEventListener('DOMContentLoaded', function() {
  const likeHeartArray = document.querySelectorAll('.like-icon');
  const likeButtonArray = document.querySelectorAll('.card__like-button');
  const iconButtonArray = document.querySelectorAll('.card__icon-button');

  iconButtonArray.forEach((iconButton, index) => {
    iconButton.addEventListener('click', function(event) {
      event.preventDefault();
      event.stopPropagation();
      if (likeHeartArray[index] && likeButtonArray[index]) {
        toggleIsLiked(likeHeartArray[index], likeButtonArray[index]);
      }
      return false;
    });
  });

  likeButtonArray.forEach((button, index) => {
    button.addEventListener('click', function(event) {
      event.preventDefault();
      event.stopPropagation();
      if (likeHeartArray[index]) {
        toggleIsLiked(likeHeartArray[index], button);
      }
      return false;
    });
  });

  function toggleIsLiked(heart, button) {
    heart.classList.toggle('is-liked');
    setButtonText(heart, button);
  }

  function setButtonText(heart, button) {
    const textSpan = button.querySelector('.button__text');
    if (!textSpan) return;
    
    if ([...heart.classList].includes('is-liked')) {
      setTimeout(() => {
        if (textSpan) textSpan.textContent = 'Unlike';
      }, 500);
    } else {
      setTimeout(() => {
        if (textSpan) textSpan.textContent = 'Like';
      }, 500);
    }
  }
});
