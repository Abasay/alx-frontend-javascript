export const weakMap = new WeakMap();

export function queryAPI(endpointArg) {
  // https://stackoverflow.com/questions/29413222/what-are-the-actual-uses-of-es6-weakmap (definitely worth reading)
  let called = weakMap.get(endpointArg) || 0;
  called += 1;
  if (called >= 5) {
    throw new Error('Endpoint load is high');
  }
  weakMap.set(endpointArg, called);
}
