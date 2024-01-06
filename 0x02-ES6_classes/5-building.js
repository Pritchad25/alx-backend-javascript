export default class Building {
  constructor(sqft) {
    // Any class extending Building must implement below method
    if (this.constructor !== Building && !this.evacuationWarningMessage) throw Error('Class extending Building must override evacuationWarningMessage');

    // Create objs
    /* eslint no-underscore-dangle: 0 */
    this._sqft = sqft;
  }

  // Methods

  // Setters

  // Getters
  get sqft() {
    /* eslint no-underscore-dangle: 0 */
    return this._sqft;
  }
}
