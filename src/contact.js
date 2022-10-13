export class Contact {

  constructor(contact) {
    this._name = contact.name;
    this._phone = contact.phone;
    this._email = contact.email;
    this._address = contact.address;
    this._position_name = contact.position_name;
    this._department = contact.department;
    this._hire_date = contact.hire_date;

  }

  card() {
    const card = document.createElement('li');
    card.classList.add('contacts__card', 'card');

    const cardTitle = document.createElement('h2');
    cardTitle.classList.add('card__title');
    cardTitle.textContent = this._name;

    const cardPhone = document.createElement('p');
    cardPhone.classList.add('card__phone');
    cardPhone.textContent = this._phone;

    const cardEmail = document.createElement('p');
    cardEmail.classList.add('card__email');
    cardEmail.textContent = this._email;

    card.append(cardTitle);
    card.append(cardPhone);
    card.append(cardEmail);

    card.addEventListener('click', () => {
      this.view();
    })
    return card
  }

  view() {
    const container = document.getElementById('app');
    const contact = document.createElement('div');
    contact.classList.add('contact');

    const base = document.createElement('div');
    base.classList.add('contact__background');

    const closeBtn = document.createElement('div');
    closeBtn.classList.add('contact__btn');

    const close = document.createElement('div');
    close.classList.add('contact__close');

    closeBtn.append(close);
    contact.append(closeBtn);

    const title = document.createElement('h2');
    title.classList.add('contact__title');
    title.textContent = this._name;

    contact.append(title);

    contact.append(this._getRow('Телефон:', this._phone));
    contact.append(this._getRow('Почта:', this._email));
    contact.append(this._getRow('Дата приема:', this._hire_date));
    contact.append(this._getRow('Должность:', this._position_name));
    contact.append(this._getRow('Подразделение:', this._department));

    const additional = document.createElement('p');
    additional.classList.add('contact__additional');
    additional.textContent = 'Дополнительная информация:';

    const additionalValue = document.createElement('p');
    additionalValue.classList.add('contact__additional-value');
    additionalValue.textContent = `Разработчики используют текст Lorem ipsum в качестве заполнителя макета страницы. 
    Так как дополнительной информации в JSON нет, а адрес нигде не используется, закинул его сюда: ${this._address}`;

    contact.append(additional);
    contact.append(additionalValue);

    base.append(contact);
    container.append(base);

    contact.addEventListener('click', (event) => {
      event.stopPropagation();
    })

    base.addEventListener('click', () => {
      base.remove();
    })

    closeBtn.addEventListener('click', () => {
      base.remove();
    })
  }

  _getRow(property, value) {
    const row = document.createElement('div');
    row.classList.add('contact__row');

    const propertyName = document.createElement('p');
    propertyName.classList.add('contact__property');
    propertyName.textContent = property;

    const contactValue = document.createElement('p');
    contactValue.classList.add('contact__value');
    contactValue.textContent = value;

    row.append(propertyName);
    row.append(contactValue);

    return row
  }
}

