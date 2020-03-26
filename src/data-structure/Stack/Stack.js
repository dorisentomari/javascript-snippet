export class Stack {

  constructor(size = 10) {
    this._capacity = 0;
    this._size = size;
    this._data = [];
  }

  clear() {
    this._data.splice(0, this._capacity);
    this._capacity = 0;
    return true;
  }

  capacity() {
    return this._capacity;
  }

  size() {
    return this._size;
  }

  isEmpty() {
    return this._capacity === 0;
  }

  isFull() {
    return this._capacity === this._size;
  }

  push(element) {
    if (this.isFull()) {
      return false;
    }
    this._data.push(element);
    this._capacity++;
    return true;
  }

  pop() {
    if (this.isEmpty()) {
      return null;
    }
    this._capacity--;
    const element = this._data[this._capacity];
    this._data.splice(this._capacity, 1);
    return element;
  }

  top() {
    if (this.isEmpty()) {
      return null;
    }
    return this._data[this._capacity - 1];
  }

  traverse() {
    return this._data;
  }

}