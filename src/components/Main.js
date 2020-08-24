import React from 'react';
import Card from './Card';
import { api } from '../utils/Api.js';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js'

function Main({ onEditProfile, onAddForm, onEditAvatar, onCardClick }) {

  //Данные о текущем пользователе.
  const currentUserData = React.useContext(CurrentUserContext);

  //Переменная состояния с данными карточек.
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api.getCardsInfo()
      .then((data) => {
        //Обновить данные карточек.
        setCards(data);
      })
      .catch((error) => {
        console.log(`Ошибка: ${error}`);
      })
  }, [])

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar-container">
          <img className="profile__avatar" alt="аватар" src={currentUserData.avatar} />
          <div className="profile__overlay">
            <button type="button" onClick={onEditAvatar} className="profile__edit-avatar" />
          </div>
        </div>
        <div className="profile__info">
          <div className="profile__name-group">
            <h1 className="profile__name" type="">{currentUserData.name}</h1>
            <button type="button" onClick={onEditProfile} className="profile__edit-button" />
          </div>
          <p className="profile__about">{currentUserData.about}</p>
        </div>
        <button type="button" onClick={onAddForm} className="profile__add-button" />
      </section>

      <section className="cards">
        <ul className="cards__list">
          {cards.map((card) => (
            <Card card={card} key={card._id} onCardClick={onCardClick} />
          )
          )}
        </ul>
      </section>
    </main>
  )
}

export default Main;
