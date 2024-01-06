import Building from './5-building';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    // call constructor of super class (Building)
    super(sqft);

    // Create objs
    /* eslint no-underscore-dangle: 0 */
    this._floors = floors;
  }

  // Methods

  evacuationWarningMessage() {
    return `Evacuate slowly the ${this.floors} floors`;
  }

  // Setters

  // Getters
  get sqft() {
    /* eslint no-underscore-dangle: 0 */
    return this._sqft;
  }

  get floors() {
    /* eslint no-underscore-dangle: 0 */
    return this._floors;
  }
}
