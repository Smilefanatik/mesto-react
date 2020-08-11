import React from 'react';
import { api } from '../utils/Api.js';

function Main(props) {

  const [userName, setUserName] = React.useState("");

  const [userDescription, setUserDescription] = React.useState("");

  const [userAvatar, setUserAvatar] = React.useState("");

  React.useEffect(() => {
    api.getUserInfo()
    .then((result) => {
      setUserName(result.name)
      setUserDescription(result.about)
      setUserAvatar(result.avatar)
    });
  })

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

        </ul>
      </section>


    </main>
  )
}

export default Main;
