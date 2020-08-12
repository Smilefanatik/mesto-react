import React from 'react';

function Card(props) {
  function handleImageClick() {
    props.onCardClick(props.card);
  }

  return (
    <li className="card">
      <button type="button" className="card__bin"></button>
      <img className="card__photo" alt={props.card.name} src={props.card.link} onClick={handleImageClick} />
      <div className="card__group">
        <h2 className="card__title">{props.card.name}</h2>
        <div className="card__like-group">
          <button type="button" className="card__like"></button>
          <p className="card__counter">{props.card.likes.length}</p>
        </div>
      </div>
    </li>
  )
}

export default Card;
