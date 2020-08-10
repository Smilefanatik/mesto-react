import React from 'react';

function Main(props) {
  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar-container">
          <img className="profile__avatar" alt="аватар" />
          <div className="profile__overlay">
            <button type="button" onClick={props.onEditAvatar} className="profile__edit-avatar"></button>
          </div>
        </div>
        <div className="profile__info">
          <div className="profile__name-group">
            <h1 className="profile__name" type=""></h1>
            <button type="button" onClick={props.onEditProfile} className="profile__edit-button"></button>
          </div>
          <p className="profile__about"></p>
        </div>
        <button type="button" onClick={props.onAddForm} className="profile__add-button"></button>
      </section>

      <section className="cards">
        <ul className="cards__list">

        </ul>
      </section>


    </main>
  )
}

export default Main;
