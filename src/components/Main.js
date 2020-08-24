import React from 'react';
import Card from './Card';
import { api } from '../utils/Api';
import { CurrentUserContext } from '../contexts/CurrentUserContext'

function Main({ onEditProfile, onAddForm, onEditAvatar, onCardClick }) {

  //Данные о текущем пользователе.
  const currentUserData = React.useContext(CurrentUserContext);

  //Переменная состояния с данными карточек.
  const [cards, setCards] = React.useState([]);

  //Получить начальный массив с тридцатью карточками.
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

  //Обработчик клика по лайку.
  function handleCardLike(card) {
    //Проверка на наличие собственного лайка.
    const isLiked = card.likes.some(i => i._id === currentUserData._id);

    //Отправляем запрос на сервер в зависимости от наличия лайка.
    const putOrDelete = () => isLiked ? api.deleteLike(card._id) : api.addLike(card._id);
    putOrDelete()
      .then((newCard) => {
        //Создать новый массив карточек, подставляя новые данные карточки.
        const newCards = cards.map((c) => c._id === card._id ? newCard : c);
        // Обновляем состояние.
        setCards(newCards)
      })
  }

  //Обработчик клика по иконке удаления.
  function handleCardDelete(card) {
    api.deleteCard(card._id)
      .then(() => {
        //Создать новый массив карточек, подставляя новые данные карточки.
        const newCards = cards.filter(function(c) {
          if (c._id !== card._id) {
            return true
          }
        })
        // Обновляем состояние.
        setCards(newCards)
      })
  }

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
            <Card card={card} key={card._id} onCardBin={handleCardDelete} onCardClick={onCardClick} onCardLike={handleCardLike} />
          )
          )}
        </ul>
      </section>
    </main>
  )
}

export default Main;
