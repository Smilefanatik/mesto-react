import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js'

function Card({ card, onCardClick }) {
  //Данные о текущем пользователе.
  const currentUserData = React.useContext(CurrentUserContext);

  //Проверка на совпадение id пользователя.
  const isOwn = card.owner._id === currentUserData._id;

  //Условие отображения корзины.
  const cardBinClassName = (
    `card__bin ${!isOwn ? 'card__bin_hidden' : ''}`
  );

  //Проверка на собственный лайк.
  const isLiked = card.likes.some(i => i._id === currentUserData._id);

  // Создаём переменную, которую после зададим в `className` для кнопки лайка
  const cardLikeClassName = `card__like ${isLiked ? 'card__like_active' : ''}`;

  //Обработчик клика по изображению.
  function handleImageClick() {
    onCardClick(card);
  }

  return (
    <li className="card">
      <button type="button" className={cardBinClassName} />
      <img className="card__photo" alt={card.name} src={card.link} onClick={handleImageClick} />
      <div className="card__group">
        <h2 className="card__title">{card.name}</h2>
        <div className="card__like-group">
          <button type="button" className={cardLikeClassName} />
          <p className="card__counter">{card.likes.length}</p>
        </div>
      </div>
    </li>
  )
}

export default Card;
