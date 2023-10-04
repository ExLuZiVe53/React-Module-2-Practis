import { Component } from 'react';

export default class DeviceForm extends Component {
  // створюємо state
  state = {
    title: '',
    brand: '',
    price: '',
    type: '',
  };

  //  Створюємо метод для зміни стейту
  onInputChangeValue = event => {
    // коли звертаємось до поля об'єкту використовуємо [] для того щоб написати вираз який підставить назву властивості об'єкта
    // event.target.name - куди записувати?
    // event.target.value - що записувати?
    // {key:value}
    this.setState({ [event.target.name]: event.target.value });
    // патерн контрольовані форми
  };

  onFormSubmit = event => {
    event.preventDefault();
    console.log(event);
  };

  render() {
    // Деструкторизуємо наші пропси зі стейту
    const { title, brand, price, type } = this.state;
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <label>
            <p>Title:</p>
            <input
              type="text"
              //   значення ім'я name має співпадати з нашим стейтом
              name="title"
              value={title}
              onChange={this.onInputChangeValue}
              required
            />
          </label>
          <label>
            <p>Brand:</p>
            <input
              type="text"
              name="brand"
              value={brand}
              onChange={this.onInputChangeValue}
              required
            />
          </label>
          <label>
            <p>Price:</p>
            <input
              type="text"
              name="price"
              value={price}
              onChange={this.onInputChangeValue}
              required
            />
          </label>
          <label>
            <p>Type:</p>
            <input
              type="text"
              name="type"
              value={type}
              onChange={this.onInputChangeValue}
              required
            />
          </label>
          <br />
          <button type="submit">Add device</button>
        </form>
      </div>
    );
  }
}
