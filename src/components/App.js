import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddFormPopup from './AddFormPopup';
import ImagePopup from './ImagePopup';
import { api } from '../utils/Api.js';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js'

function App() {

  //Переменная состояния с данными текущего пользователя.
  const [currentUser, setCurrentUser] = React.useState({});
  //Получить начальную информацию о пользователе.
  React.useEffect(() => {
    api.getUserInfo()
      .then((res) => {
        //Вывести начальные данные пользователя.
        setCurrentUser(res);
      })
      .catch((error) => {
        console.log(`Ошибка: ${error}`);
      })
  }, [])

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
    const isLiked = card.likes.some(i => i._id === currentUser._id);

    //Отправляем запрос на сервер в зависимости от наличия лайка.
    const putOrDelete = () => isLiked ? api.deleteLike(card._id) : api.addLike(card._id);
    putOrDelete()
      .then((newCard) => {
        //Создать новый массив карточек, подставляя новые данные карточки.
        const newCards = cards.map((c) => c._id === card._id ? newCard : c);
        // Обновляем состояние.
        setCards(newCards)
      })
      .catch((error) => {
        console.log(`Ошибка: ${error}`);
      })
  }

  //Обработчик клика по иконке удаления.
  function handleCardDelete(card) {
    api.deleteCard(card._id)
      .then(() => {
        //Создать новый массив карточек, подставляя новые данные карточки.
        const newCards = cards.filter(function (c) {
          return c._id !== card._id
        })
        // Обновляем состояние.
        setCards(newCards)
      })
      .catch((error) => {
        console.log(`Ошибка: ${error}`);
      })
  }

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

  //Обработчик сабмита формы редактирования профиля.
  function handleUpdateUser(userData) {
    api.changeProfileData(userData)
      .then((res) => {
        setCurrentUser(res)
      })
      .catch((error) => {
        console.log(`Ошибка: ${error}`);
      })
      .finally(() => {
        closeAllPopups();
      });
  }

  //Обработчик сабмита формы редактирования аватара.
  function handleUpdateAvatar(userAvatar) {
    api.changeAvatar(userAvatar)
      .then((res) => {
        setCurrentUser(res)
      })
      .catch((error) => {
        console.log(`Ошибка: ${error}`);
      })
      .finally(() => {
        closeAllPopups();
      });
  }

  //Обработчик сабмита формы добавления новой карточки.
  function handleAddPlaceSubmit(newCard) {
    api.addNewCard(newCard)
      .then((res) => {
        setCards([...cards, res]);
      })
      .catch((error) => {
        console.log(`Ошибка: ${error}`);
      })
      .finally(() => {
        closeAllPopups();
      });
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Header />
        <Main cards={cards} onCardLike={handleCardLike} onCardDelete={handleCardDelete} onEditProfile={handleEditProfileClick} onAddForm={handleAddFormClick} onEditAvatar={handleEditAvatarClick} onCardClick={handleCardClick} />

        <EditProfilePopup isOpen={isEditProfilePopupOpen} onUpdateUser={handleUpdateUser} onClose={closeAllPopups} />

        <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onUpdateAvatar={handleUpdateAvatar} onClose={closeAllPopups} />

        <AddFormPopup isOpen={isAddFormPopupOpen} onAddCard={handleAddPlaceSubmit} onClose={closeAllPopups} />

        <PopupWithForm name="confirm" title="Вы уверены?" buttonName="Да" />

        <ImagePopup selectedCard={selectedCard} onClose={closeAllPopups} />
        <Footer />
      </div>
    </CurrentUserContext.Provider>
  )
}

export default App;
