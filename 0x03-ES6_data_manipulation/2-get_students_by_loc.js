export default function getStudentsByLocation(students, city) {
  // Check whether the  arg is an array before using filter
  if (Object.getPrototypeOf(students) === Array.prototype) {
    return students.filter((items) => items.location === city);
  }
  return [];
}
