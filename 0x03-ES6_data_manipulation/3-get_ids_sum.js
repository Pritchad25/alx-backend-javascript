export default function getStudentIdsSum(students) {
  // checking if arg is an array before using reduce
  if (Object.getPrototypeOf(students) === Array.prototype) {
    // using map to gather ids into a new array
    const ids = students.map((items) => items.id);
    // Definition of the formula to add all elements together
    const reducer = (accumlator, currentValue) => accumlator + currentValue;
    return ids.reduce(reducer);
  }
  return [];
}
