import React from 'react';

function ImagePopup({ selectedCard, onClose }) {
  let name = '';
  let link = '';
  if (selectedCard) {
    name = selectedCard.name;
    link = selectedCard.link;
  }

  return (
    <div className={`popup popup_type_image ${selectedCard ? "popup_opened" : ""}`}>
      <div className="popup__container popup__container_type_image">
        <button type="reset" className="popup__close-icon" onClick={onClose} />
        <img className="popup__image" src={link} alt={name} />
        <p className="popup__text">{name}</p>
      </div>
    </div>
  )
}

export default ImagePopup;
