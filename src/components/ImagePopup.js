import React from 'react';

function ImagePopup() {
  return (
    <div className="popup popup_type_image">
      <div className="popup__container popup__container_type_image">
        <button type="reset" className="popup__close-icon"></button>
        <img className="popup__image" alt="" />
        <p className="popup__text"></p>
      </div>
    </div>
  )
}

export default ImagePopup;
