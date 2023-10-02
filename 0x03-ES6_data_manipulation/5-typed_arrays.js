export default function createInt8TypedArray(length, position, value) {
  const buffer = new ArrayBuffer(length);
  console.log(buffer);
  const int32View = new Int16Array(buffer);
  console.log(int32View);
}
