import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import { api } from '../utils/Api.js';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js'

function App() {

  //Переменная состояния с данными текущего пользователя.
  const [currentUser, setCurrenUser] = React.useState({});

  React.useEffect(() => {
    api.getUserInfo()
      .then((res) => {
        //Вывести начальные данные пользователя.
        setCurrenUser(res);
      })
      .catch((error) => {
        console.log(`Ошибка: ${error}`);
      })
  }, [])

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

  //Внутреннее состояние для передачи данных карточки в попап с изображением.
  const [selectedCard, setCardState] = React.useState(null);
  function handleCardClick(card) {
    setCardState(card);
  }

  //Закрытие попапов.
  function closeAllPopups() {
    setEditProfilePopupState(false);
    setEditAvatarPopupState(false);
    setAddFormPopupState(false);
    setCardState(null);
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Header />
        <Main onEditProfile={handleEditProfileClick} onAddForm={handleAddFormClick} onEditAvatar={handleEditAvatarClick} onCardClick={handleCardClick} />

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

        <PopupWithForm name="confirm" title="Вы уверены?" buttonName="Да" />

        <ImagePopup selectedCard={selectedCard} onClose={closeAllPopups} />
        <Footer />
      </div>
    </CurrentUserContext.Provider>
  )
}

export default App;
