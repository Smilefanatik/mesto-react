import React from 'react';
import PopupWithForm from './PopupWithForm';

class EditAvatarPopup extends React.Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }

  handleSubmit(e) {
    e.preventDefault();

    this.props.onUpdateAvatar({
      avatar: this.inputRef.current.value,
    });
    this.inputRef.current.value = "";
  }

  render() {
    return (
      <PopupWithForm name="edit-avatar"
        title="Обновить аватар"
        buttonName="Сохранить"
        isOpen={this.props.isOpen ? "popup_opened" : ""}
        onSubmit={this.handleSubmit.bind(this)}
        onClose={this.props.onClose}>
        <input id="link-input" name="avatar"
          type="url"
          ref={this.inputRef}
          className="popup__input popup__input_element_link"
          placeholder="Ссылка на картинку"
          required />
        <span id="link-input-error" className="popup__input-error"></span>
      </PopupWithForm>
    )
  }
}
export default EditAvatarPopup;
