import React from 'react';
import PopupWithForm from './PopupWithForm';

export default function AddFormPopup({ isOpen, isLoading, onAddCard, onClose }) {

  //Переменная состояния с названием карточки.
  const [name, setName] = React.useState('');
  //Переменная состояния с ссылкой на картинку.
  const [link, setLink] = React.useState('');

  // Обработчик изменения поля ввода имени.
  function handleNameChange(e) {
    setName(e.target.value);
  }

  // Обработчик изменения поля ввода описания.
  function handleLinkChange(e) {
    setLink(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    // Передать информацию о пользователе на сервер.
    onAddCard({ name, link });
  }

  return (
    <PopupWithForm name="add-form"
    title="Новое место"
    buttonName={isLoading ? "Сохранение..." : "Создать"}
    isOpen={isOpen ? "popup_opened" : ""}
    onSubmit={handleSubmit}
    onClose={onClose}>
      <input id="place-input" value={name || ''} onChange={handleNameChange} name="name" type="text" className="popup__input popup__input__element_place"
        placeholder="Название" minLength="1" maxLength="30" required />
      <span id="place-input-error" className="popup__input-error"></span>
      <input id="link-input" value={link || ''} onChange={handleLinkChange} name="link" type="url" className="popup__input popup__input_element_link"
        placeholder="Ссылка на картинку" required />
      <span id="link-input-error" className="popup__input-error"></span>
    </PopupWithForm>
  )
}
