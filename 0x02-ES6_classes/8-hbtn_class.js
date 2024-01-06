export default class HolbertonClass {
  constructor(size, location) {
    // Create objs
    /* eslint no-underscore-dangle: 0 */
    this._size = size;
    /* eslint no-underscore-dangle: 0 */
    this._location = location;
  }

  // Methods

  [Symbol.toPrimitive](type) {
    /* eslint no-underscore-dangle: 0 */
    if (type === 'string') return this._location;
    /* eslint no-underscore-dangle: 0 */
    return this._size;
  }

  // Setters

  // Getters
}
