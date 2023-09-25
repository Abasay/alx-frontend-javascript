export default function createIteratorObject(report) {
  const mapArr = Object.values(report.allEmployees);
  const newArr = [];

  for (let i = 0; i < mapArr.length; i + 1) {
    for (let j = 0; j < mapArr[i].length; j + 1) {
      newArr.push(mapArr[i][j]);
    }
  }

  return newArr;
}
