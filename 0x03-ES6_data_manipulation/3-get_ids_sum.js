export default function getStudentIdsSum(studentList) {
  const idSum = studentList.reduce((acc, curr) => acc + curr.id, 0);
  return idSum;
}
