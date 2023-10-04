export default function hasValuesFromArray(setArg, arrArg) {
  for (const elem of arrArg) {
    if (!setArg.has(elem)) {
      return false;
    }
  }
  return true;
}
