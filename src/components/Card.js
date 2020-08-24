import React from 'react';

function Card({ card, onCardClick }) {
  function handleImageClick() {
    onCardClick(card);
  }

  return (
    <li className="card">
      <button type="button" className="card__bin" />
      <img className="card__photo" alt={card.name} src={card.link} onClick={handleImageClick} />
      <div className="card__group">
        <h2 className="card__title">{card.name}</h2>
        <div className="card__like-group">
          <button type="button" className="card__like" />
          <p className="card__counter">{card.likes.length}</p>
        </div>
      </div>
    </li>
  )
}

export default Card;
