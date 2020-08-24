import React from 'react';

function PopupWithForm({ name, title, buttonName, isOpen, onSubmit, onClose, children }) {

  return (
    <div className={`popup popup_type_${name} ${isOpen}`}>
      <form name={name} className={`popup__container popup__form popup__container_type_${name}`} onSubmit={onSubmit} noValidate>
        <button type="reset" className="popup__close-icon" onClick={onClose} />
        <h2 className="popup__title">{title}</h2>
        {children}
        <button type="submit" className="popup__save-button">{buttonName}</button>
      </form>
    </div>
  )
}
export default PopupWithForm;
