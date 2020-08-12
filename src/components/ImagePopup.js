import React from 'react';

function ImagePopup(props) {
  return (
    <div className={`popup popup_type_image ${props.isOpen}`}>
      <div className="popup__container popup__container_type_image">
        <button type="reset" className="popup__close-icon" onClick={props.onClose}></button>
        <img className="popup__image" src={props.card.link} alt={props.card.name} />
        <p className="popup__text">{props.card.name}</p>
      </div>
    </div>
  )
}

export default ImagePopup;
