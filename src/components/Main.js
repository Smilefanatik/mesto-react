import React from 'react';
import { api } from '../utils/Api.js';
import Card from './Card';

function Main(props) {

  const [userName, setUserName] = React.useState("");

  const [userDescription, setUserDescription] = React.useState("");

  const [userAvatar, setUserAvatar] = React.useState("");

  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    Promise.all([api.getUserInfo(), api.getCardsInfo()])
      .then((data) => {
        //Ответ с сервера с информацией пользователя.
        const userData = data[0];

        //Ответ с сервера с массивом карточек.
        const initialCardsInfo = data[1];

        //Вывести начальные данные пользователя.
        setUserName(userData.name);
        setUserDescription(userData.about);
        setUserAvatar(userData.avatar);
        //Вывести 30 карточек.
        setCards(initialCardsInfo);
      })
      .catch((error) => {
        console.log(`Ошибка: ${error}`);
      })
  }, [])

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar-container">
          <img className="profile__avatar" src={userAvatar} alt="аватар" />
          <div className="profile__overlay">
            <button type="button" onClick={props.onEditAvatar} className="profile__edit-avatar"></button>
          </div>
        </div>
        <div className="profile__info">
          <div className="profile__name-group">
            <h1 className="profile__name" type="">{userName}</h1>
            <button type="button" onClick={props.onEditProfile} className="profile__edit-button"></button>
          </div>
          <p className="profile__about">{userDescription}</p>
        </div>
        <button type="button" onClick={props.onAddForm} className="profile__add-button"></button>
      </section>

      <section className="cards">
        <ul className="cards__list">
          {cards.map((card) => (
            <Card card={card} key={card._id} onCardClick={props.onCardClick} />
          )
          )}
        </ul>
      </section>
    </main>
  )
}

export default Main;
