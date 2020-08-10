import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function App() {
//Внутреннее состояние попапа редактирования аватара и его изменение.
  const [isEditAvatarPopupOpen, setEditAvatarPopupState] = React.useState(false);
  function handleEditAvatarClick() {
    setEditAvatarPopupState(true);
  }

//Внутреннее состояние попапа редактирования профиля и его изменение.
  const [isEditProfilePopupOpen, setEditProfilePopupState] = React.useState(false);
  function handleEditProfileClick() {
    setEditProfilePopupState(true);
  }

//Внутреннее состояние попапа создания карточки и его изменение.
  const [isAddFormPopupOpen, setAddFormPopupState] = React.useState(false);
  function handleAddFormClick() {
    setAddFormPopupState(true);
  }


  function closeAllPopups() {
    setEditProfilePopupState(false);
    setEditAvatarPopupState(false);
    setAddFormPopupState(false);
  }

  return (
    <div className="page">
      <Header />
      <Main onEditProfile={handleEditProfileClick} onAddForm={handleAddFormClick} onEditAvatar={handleEditAvatarClick} />

      <PopupWithForm name="edit-profile" title="Редактировать профиль" buttonName="Сохранить" isOpen={isEditProfilePopupOpen ? "popup_opened" : ""} onClose={closeAllPopups}>
        <input id="name-input" name="name" type="text" className="popup__input popup__input_element_name"
          placeholder="Имя" minLength="2" maxLength="40" required />
        <span id="name-input-error" className="popup__input-error"></span>
        <input id="about-input" name="about" type="text" className="popup__input popup__input_element_about"
          placeholder="О себе" minLength="2" maxLength="200" required />
        <span id="about-input-error" className="popup__input-error"></span>
      </PopupWithForm>

      <PopupWithForm name="add-form" title="Новое место" buttonName="Создать" isOpen={isAddFormPopupOpen ? "popup_opened" : ""} onClose={closeAllPopups}>
        <input id="place-input" name="name" type="text" className="popup__input popup__input__element_place"
          placeholder="Название" minLength="1" maxLength="30" required />
        <span id="place-input-error" className="popup__input-error"></span>
        <input id="link-input" name="link" type="url" className="popup__input popup__input_element_link"
          placeholder="Ссылка на картинку" required />
        <span id="link-input-error" className="popup__input-error"></span>
      </PopupWithForm>

      <PopupWithForm name="edit-avatar" title="Обновить аватар" buttonName="Сохранить" isOpen={isEditAvatarPopupOpen ? "popup_opened" : ""} onClose={closeAllPopups}>
        <input id="link-input" name="avatar" type="url" className="popup__input popup__input_element_link" placeholder="Ссылка на картинку" required />
        <span id="link-input-error" className="popup__input-error"></span>
      </PopupWithForm>

      <PopupWithForm name="confirm" title="Вы уверены?" buttonName="Да"/>

      <ImagePopup />
      <Footer />
    </div>
  );
}

export default App;
