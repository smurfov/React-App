import React from 'react';
import {Link} from 'react-router-dom';
import {PRIVACY_ROUTE} from '../utils/const'

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      text: '',
      name: '',
      checked: false
    }
    this.regexp1 = /^([a-z0-9_-]+.)[a-z0-9_-]+@[a-z0-9_-]+(.[a-z0-9_-]+).[a-z]{2,6}$/gi;
    this.regexp2 = /^[a-zа-яё]+$/gi;

    this.correctEmail = this.regexp1.test(this.state.email);
    this.correctText = undefined;
    this.correctName = this.regexp2.test(this.state.name);
    this.btnDisabled = undefined;

    this.emailOnChange = this.emailOnChange.bind(this);
    this.textareaOnChange = this.textareaOnChange.bind(this);
    this.nameOnChange = this.nameOnChange.bind(this)
    this.checkboxOnChange = this.checkboxOnChange.bind(this);
    this.formOnSubmit = this.formOnSubmit.bind(this)
  }

  emailOnChange(e) {
    const regexp = /^([a-z0-9_-]+.)[a-z0-9_-]+@[a-z0-9_-]+(.[a-z0-9_-]+).[a-z]{2,6}$/gi;
    let emailText = e.target.value;
    this.setState({email: emailText})
    this.correctEmail = regexp.test(emailText);
  }

  textareaOnChange(e) {
    let textText = e.target.value
    this.setState({text: textText})
    if (e.target.value.length < 15) {
      this.correctText = false
    } else {
      this.correctText = true
    }
  }

  nameOnChange(e) {
    const regexp = /^[a-zа-яё]+$/gi;
    let nameText = e.target.value
    this.setState({name: nameText})
    if (e.target.value.length < 3) {
      this.correctName = false;
    } else {
      this.correctName = regexp.test(nameText);
    }
  }

  checkboxOnChange(e) {
    this.setState({checked: !this.state.checked})
  }

  formOnSubmit() {
    let data = {
      name: this.state.name,
      email: this.state.email,
      msg: this.state.text
    };
  
    var request = new XMLHttpRequest();
  
    function reqReadyStateChange() {
      if (request.readyState == 4) {
        var status = request.status;
        if (status == 200) {
          console.log(request.responseText)
        }
      }
    }
    var body = `name=${data.name}&email=${data.email}&msg=${data.msg}`;
    request.open("GET", 'url' + body);
    request.onreadystatechange = reqReadyStateChange;
    request.send();
  }

  render() {
    if (this.correctEmail && this.correctName && this.correctText && this.state.checked) {
      this.btnDisabled = false
    } else {
      this.btnDisabled = true
    }

    let warn;
    if (!this.correctEmail || !this.correctName || !this.correctText) {
      warn = 'Если у вас поле горит красным, значит вы либо оставили поле пустым, либо не правильно заполнели'
    }

    return (
      <form
        action="#"
        method="get"
        name="contact"
        className="help__content__content__form"
        id="form"
        onSubmit={this.formOnSubmit}>
        <input
          type="text"
          name="name"
          className={this.correctName === true
          ? 'help__content__content__form__name'
          : 'help__content__content__form__name error'}
          placeholder="Имя"
          id="name"
          required
          value={this.state.name}
          onChange={this.nameOnChange}/>
        <input
          type="email"
          name="email"
          className={this.correctEmail === true
          ? 'help__content__content__form__email'
          : 'help__content__content__form__name error'}
          placeholder="E-mail"
          id="email"
          required
          value={this.state.email}
          onChange={this.emailOnChange}/>
        <textarea
          name="msg"
          className={this.correctText === true
          ? 'help__content__content__form__msg'
          : 'help__content__content__form__msg error'}
          cols="30"
          rows="10"
          placeholder="Текст сообщения:"
          id="msg"
          required
          value={this.state.text}
          onChange={this.textareaOnChange}/>
        <div className="margin-auto red">
          <span>{warn}</span>
        </div>
        <div className="margin-auto">
          <input type="checkbox" id="agreement" required onChange={this.checkboxOnChange} defaultChecked={this.state.checked}/>
          <label for="agreement">
            <span className="help__content__content__form__agreement__text">Подтверждаю согласие на отправку моих персональных данных.
              <Link target="new" to={PRIVACY_ROUTE}>Политика конфиденциальности</Link>
            </span>
          </label>
        </div>
        <button
          type="submit"
          className={this.btnDisabled === false
          ? 'help__content__content__form__btn'
          : 'help__content__content__form__btn blocked'}
          id="send"
          disabled={this.btnDisabled}>Отправить</button>
      </form>
    )
  }
};

export default Form