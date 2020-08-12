import React from 'react';

function PopupWithForm(props) {

  return (
    <div className={`popup popup_type_${props.name} ${props.isOpen}`}>
      <form name={props.name} className={`popup__container popup__form popup__container_type_${props.name}`} noValidate>
        <button type="reset" className="popup__close-icon" onClick={props.onClose} ></button>
        <h2 className="popup__title">{props.title}</h2>
        {props.children}
        <button type="submit" className="popup__save-button">{props.buttonName}</button>
      </form>
    </div>
  )
}
export default PopupWithForm;
