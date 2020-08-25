import React from 'react';
import PopupWithForm from './PopupWithForm';

export default function ConfirmPopup({ isOpen, cardToDelete, onDeleteCard, onClose }) {

  function handleSubmit(e) {
    e.preventDefault();
    onDeleteCard(cardToDelete)
  }

  return (
    <PopupWithForm name="confirm"
      title="Вы уверены?"
      buttonName="Да"
      isOpen={isOpen ? "popup_opened" : ""}
      onSubmit={handleSubmit}
      onClose={onClose} />
  )
}
