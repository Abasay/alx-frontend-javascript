export default function getListStudentIds(arrArg) {
  if (!Array.isArray(arrArg)) {
    return [];
  }
  const newArr = arrArg.map((elem) => elem.id);
  return newArr;
}
