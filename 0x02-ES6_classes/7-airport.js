export default class Airport {
  constructor(name, code) {
    // Create objs
    /* eslint no-underscore-dangle: 0 */
    this._code = code;
    /* eslint no-underscore-dangle: 0 */
    this._name = name;
  }

  // Methods

  get [Symbol.toStringTag]() {
    /* eslint no-underscore-dangle: 0 */
    return `${this._code}`;
  }

  // Setters

  // Getters
}
