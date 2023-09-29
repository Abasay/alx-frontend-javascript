import Currency from './3-currency.js';

export default class Pricing {
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }
  // get amount
  get amount() {
    return this._amount;
  }

  // set amount
  set amount(val) {
    this._amount = val;
  }

  // get currency
  get currency() {
    return this._currency;
  }
  //set currency
  set currency(val) {
    this._currency = val;
  }
  //display full price method
  displayFullPrice() {
    return `${this._amount} ${this._currency.name} ${this._currency.code}`
  }
  //static method to convertprice
  static convertPrice(amount, conversionRate) {
    return amount * conversionRate
  }
}
