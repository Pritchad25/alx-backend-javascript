export default class Currency {
  constructor(code, name) {
    // Create objs
    /* eslint no-underscore-dangle: 0 */
    this._code = code;
    /* eslint no-underscore-dangle: 0 */
    this._name = name;
  }

  // Methods

  displayFullCurrency() {
    return (`${this.name} (${this.code})`);
  }

  // Setters
  set name(newName) {
    /* eslint no-underscore-dangle: 0 */
    this._name = newName;
  }

  set code(newCode) {
    /* eslint no-underscore-dangle: 0 */
    this._name = newCode;
  }

  // Getters
  get name() {
    /* eslint no-underscore-dangle: 0 */
    return this._name;
  }

  get code() {
    /* eslint no-underscore-dangle: 0 */
    return this._code;
  }
}
