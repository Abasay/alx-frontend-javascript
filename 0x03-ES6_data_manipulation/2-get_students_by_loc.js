export default function getStudentsByLocation(studentList, city) {
  const filteredStudent = studentList.filter((elem) => elem.location === city);
  return filteredStudent;
}
