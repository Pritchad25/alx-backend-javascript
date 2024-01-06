class HolbertonClass {
  constructor(year, location) {
    /* eslint no-underscore-dangle: 0 */
    this._year = year;
    /* eslint no-underscore-dangle: 0 */
    this._location = location;
  }

  get year() {
    /* eslint no-underscore-dangle: 0 */
    return this._year;
  }

  get location() {
    /* eslint no-underscore-dangle: 0 */
    return this._location;
  }
}

const class2019 = new HolbertonClass(2019, 'San Francisco');
const class2020 = new HolbertonClass(2020, 'San Francisco');

class StudentHolberton {
  constructor(firstName, lastName, holbertonClass) {
    /* eslint no-underscore-dangle: 0 */
    this._firstName = firstName;
    /* eslint no-underscore-dangle: 0 */
    this._lastName = lastName;
    /* eslint no-underscore-dangle: 0 */
    this._holbertonClass = holbertonClass;
    /* eslint no-underscore-dangle: 0 */
  }

  get fullName() {
    /* eslint no-underscore-dangle: 0 */
    return `${this._firstName} ${this._lastName}`;
  }

  get holbertonClass() {
    return this.holbertonClass;
  }
}

const student1 = new StudentHolberton('Guillaume', 'Salva', class2020);
const student2 = new StudentHolberton('John', 'Doe', class2020);
const student3 = new StudentHolberton('Albert', 'Clinton', class2019);
const student4 = new StudentHolberton('Donald', 'Bush', class2019);
const student5 = new StudentHolberton('Jason', 'Sandler', class2019);

const listOfStudents = [student1, student2, student3, student4, student5];
export default listOfStudents;
