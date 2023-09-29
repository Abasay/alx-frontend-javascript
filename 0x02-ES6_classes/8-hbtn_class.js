export default class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;

    if(typeof(this.prototype) === 'NaN') {
      return size;
    }
    if(typeof(this) === 'string') {
      return location;
    }
  }
}
