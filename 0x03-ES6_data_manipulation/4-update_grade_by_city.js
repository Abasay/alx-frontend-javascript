export default function updateStudentGradeByCity(studentList, city, gradeArr) {
  const filtered = studentList.filter((student) => student.location === city);
  const returns = filtered.map((obj) => {
    const gradeObj = gradeArr.filter((elem) => elem.studentId === obj.id);
    if (gradeObj[0]) {
      return { ...obj, grade: gradeObj[0].grade };
    }
    return { ...obj, grade: 'N/A' };
  });
  return returns;
}
