export default function cleanSet(setArg, startString) {
  const resArr = [];
  const deleteCount = startString.length;
  let state = false;
  for (const elem of setArg) {
    for (let i = 0; i < startString.length; i += 1) {
      if (startString[i] !== elem[i]) {
        state = false;
        break;
      } else {
        state = true;
      }
    }
    if (state) {
      resArr.push(elem);
    }
  }
  const anoArr = [];
  for (const elem of resArr) {
    const elemArr = Array.from(elem);
    const spliced = elemArr.splice(deleteCount, elem.length);
    const joined = spliced.join('');
    anoArr.push(joined);
  }
  return anoArr.join('-');
}
