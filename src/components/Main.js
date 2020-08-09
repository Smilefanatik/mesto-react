import React from 'react';

function Main() {

  function handleEditAvatarClick() {
    const popupEditAvatar = document.querySelector('.popup_type_edit-avatar');
    popupEditAvatar.classList.add('popup_opened');
}

  function handleEditProfileClick() {
    const popupEditProfile = document.querySelector('.popup_type_edit-profile');
    popupEditProfile.classList.add('popup_opened');
  }

  function handleAddFormClick() {
    const popupAddForm = document.querySelector('.popup_type_add-form');
    popupAddForm.classList.add('popup_opened');
  }

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar-container">
          <img className="profile__avatar" alt="аватар" />
          <div className="profile__overlay">
            <button type="button" onClick={handleEditAvatarClick} className="profile__edit-avatar"></button>
          </div>
        </div>
        <div className="profile__info">
          <div className="profile__name-group">
            <h1 className="profile__name" type=""></h1>
            <button type="button" onClick={handleEditProfileClick} className="profile__edit-button"></button>
          </div>
          <p className="profile__about"></p>
        </div>
        <button type="button" onClick={handleAddFormClick} className="profile__add-button"></button>
      </section>

      <section className="cards">
        <ul className="cards__list">

        </ul>
      </section>
      <div className="popup popup_type_edit-profile">
        <form className="popup__container popup__form popup__container_type_edit-profile" noValidate>
          <button type="reset" className="popup__close-icon"></button>
          <h2 className="popup__title">Редактировать профиль</h2>
          <input id="name-input" name="name" type="text" className="popup__input popup__input_element_name"
            placeholder="Имя" minLength="2" maxLength="40" required />
          <span id="name-input-error" className="popup__input-error"></span>
          <input id="about-input" name="about" type="text" className="popup__input popup__input_element_about"
            placeholder="О себе" minLength="2" maxLength="200" required />
          <span id="about-input-error" className="popup__input-error"></span>
          <button type="submit" className="popup__save-button">Сохранить</button>
        </form>
      </div>

      <div className="popup popup_type_add-form">
        <form className="popup__container popup__form popup__container_type_add-form" noValidate>
          <button type="reset" className="popup__close-icon"></button>
          <h2 className="popup__title">Новое место</h2>
          <input id="place-input" name="name" type="text" className="popup__input popup__input__element_place"
            placeholder="Название" minLength="1" maxLength="30" required />
          <span id="place-input-error" className="popup__input-error"></span>
          <input id="link-input" name="link" type="url" className="popup__input popup__input_element_link"
            placeholder="Ссылка на картинку" required />
          <span id="link-input-error" className="popup__input-error"></span>
          <button type="submit" className="popup__save-button">Создать</button>
        </form>
      </div>

      <div className="popup popup_type_edit-avatar">
        <form className="popup__container popup__form popup__container_type_edit-avatar" noValidate>
          <button type="reset" className="popup__close-icon"></button>
          <h2 className="popup__title">Обновить аватар</h2>
          <input id="link-input" name="avatar" type="url" className="popup__input popup__input_element_link" placeholder="Ссылка на картинку" required />
          <span id="link-input-error" className="popup__input-error"></span>
          <button type="submit" className="popup__save-button">Сохранить</button>
        </form>
      </div>
    </main>
  )
}

export default Main;
