export class Queue {
  constructor(size) {
    this._size = size;
    this._capacity = 0;
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

  front() {
    if (this.isEmpty()) {
      return null;
    }
    return this._data[0];
  }

  back() {
    if (this.isEmpty()) {
      return null;
    }
    return this._data[this._capacity - 1];
  }

  enqueue(element) {
    if (this.isFull()) {
      return null;
    }
    this._data.push(element);
    this._capacity++;
    return true;
  }

  dequeue() {
    if (this.isEmpty()) {
      return null;
    }
    this._data.splice(0, 1);
    this._capacity--;
    return true;
  }

  traverse() {
    return this._data;
  }

}
