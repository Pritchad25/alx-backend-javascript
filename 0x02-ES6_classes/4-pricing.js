import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    // Create objs
    /* eslint no-underscore-dangle: 0 */
    this._amount = amount;
    /* eslint no-underscore-dangle: 0 */
    this._currency = currency;
  }

  // Methods

  displayFullPrice() {
    return (`${this.amount} ${this.currency.name} (${this.currency.code})`);
  }

  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }

  // Setters
  set amount(newAmount) {
    /* eslint no-underscore-dangle: 0 */
    this._amount = newAmount;
  }

  set currency(newCurrency) {
    if (!(newCurrency instanceof Currency)) throw TypeError('currency must be an instance of Currency');
    /* eslint no-underscore-dangle: 0 */
    this._currency = newCurrency;
  }

  // Getters
  get amount() {
    /* eslint no-underscore-dangle: 0 */
    return this._amount;
  }

  get currency() {
    /* eslint no-underscore-dangle: 0 */
    return this._currency;
  }
}
