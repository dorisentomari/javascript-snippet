// 数组队列
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

  // O(1)
  enqueue(element) {
    if (this.isFull()) {
      return null;
    }
    this._data.push(element);
    this._capacity++;
    return true;
  }

  // O(n)
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

// 循环队列
export class LoopQueue {
  constructor(capacity = 10) {
    this._data = Array.from({ length: capacity + 1 });
    this.front = 0;
    this.tail = 0;
    this._size = 0;
  }

  capacity() {
    return this._data.length - 1;
  }

  size() {
    return this._size;
  }

  isEmpty() {
    return this.front === this.tail;
  }

  isFull() {
    return (this.tail + 1) % this._data.length === this.front;
  }

  enqueue(e) {
    if (this.isFull()) {
      return false;
    }
    this._data[this.tail] = e;
    this.tail = (this.tail + 1) % this._data.length;
    this._size++;
  }

  dequeue() {
    if (this.isEmpty()) {
      return false;
    }

    const ret = this._data[this.front];
    this._data[this.front] = null;
    this.front = (this.front + 1) % this._data.length;
    this._size--;
    return ret;
  }

  traverse() {
    const res = [];
    for (let i = this.front; i !== this.tail; i = (i + 1) % this._data.length) {
      res.push(this._data[i]);
    }
    return res;
  }
}
