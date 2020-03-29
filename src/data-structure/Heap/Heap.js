// 堆，优先队列

export class MaxHeap {

  constructor(size) {
    this.data = Array.from({ length: size });
    // 最大容量
    this._size = size;
    // 实际容量
    this._capacity = 0;
  }

  size() {
    return this._size;
  }

  isEmpty() {
    return this._capacity === 0;
  }

  isFull() {
    return this._size === this._capacity;
  }

  shiftUp(k) {
    const parentNode = Math.floor(k / 2);
    while (k > 1 && this.data[parentNode] < this.data[k]) {
      [this.data[parentNode], this.data[k]] = [this.data[k], this.data[parentNode]];
      k = parentNode;
    }
  }

  shiftDown(k) {
    while (2 * k <= this._capacity) {
      let j = 2 * k;
      if (j + 1 <= this._capacity && this.data[j + 1] > this.data[j]) {
        j++;
      }
      if (this.data[k] >= this.data[j]) {
        break;
      }
      [this.data[k], this.data[j]] = [this.data[j], this.data[k]];
      k = j;
    }
  }

  // 添加元素
  insert(element) {
    if (this.isFull()) {
      return;
    }
    this.data[this._capacity + 1] = element;
    this._capacity++;
    this.shiftUp(this._capacity);
  }

  // 移除最大值
  extractMax() {
    const ret = this.data[1];

    [this.data[1], this.data[this._capacity]] = [this.data[this._capacity], this.data[1]];

    this._capacity--;

    this.shiftDown(1);

    return ret;
  }

}
