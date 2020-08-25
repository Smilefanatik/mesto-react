import React from 'react';
import PopupWithForm from './PopupWithForm';
import { CurrentUserContext } from '../contexts/CurrentUserContext'

export default function EditProfilePopup({ isOpen, isLoading, onUpdateUser, onClose }) {

  //Данные о текущем пользователе.
  const currentUserData = React.useContext(CurrentUserContext);

  //Переменная состояния с именем пользователя.
  const [name, setName] = React.useState('');
  //Переменная состояния с описанием пользователя.
  const [about, setAbout] = React.useState('');

  //Обновить данные пользователя исходя из контекста.
  React.useEffect(() => {
    setName(currentUserData.name);
    setAbout(currentUserData.about);
  }, [currentUserData]);

  // Обработчик изменения поля ввода имени.
  function handleNameChange(e) {
    setName(e.target.value);
  }

  // Обработчик изменения поля ввода описания.
  function handleInfoChange(e) {
    setAbout(e.target.value);
  }

  //Обработчик на сабмит.
  function handleSubmit(e) {
    e.preventDefault();
    // Передать информацию о пользователе на сервер.
    onUpdateUser({ name, about });
  }

  return (
    <PopupWithForm name="edit-profile"
      title="Редактировать профиль"
      buttonName={isLoading ? "Сохранение..." : "Сохранить"}
      isOpen={isOpen ? "popup_opened" : ""}
      onSubmit={handleSubmit}
      onClose={onClose}>
      <input id="name-input"
        name="name"
        type="text"
        value={name || ''}
        onChange={handleNameChange}
        className="popup__input popup__input_element_name"
        placeholder="Имя"
        minLength="2"
        maxLength="40"
        required />
      <span id="name-input-error" className="popup__input-error"></span>
      <input id="about-input"
        name="about"
        type="text"
        value={about || ''}
        onChange={handleInfoChange}
        className="popup__input popup__input_element_about"
        placeholder="О себе"
        minLength="2"
        maxLength="200"
        required />
      <span id="about-input-error" className="popup__input-error"></span>
    </PopupWithForm>
  )
}


