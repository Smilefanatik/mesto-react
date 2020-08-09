import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

function App() {
  return (
    <div className="page">
    <Header />
    <Main />

    <div className="popup popup_type_image">
      <div className="popup__container popup__container_type_image">
        <button type="reset" className="popup__close-icon"></button>
        <img className="popup__image" alt="" />
        <p className="popup__text"></p>
      </div>
    </div>

    <div className="popup popup_type_confirm">
      <form className="popup__container popup__form popup__container_type_confirm">
        <button type="reset" className="popup__close-icon"></button>
        <h2 className="popup__title">Вы уверены?</h2>
        <button type="submit" className="popup__save-button">Да</button>
      </form>
    </div>

    <Footer />
  </div>
  );
}

export default App;
