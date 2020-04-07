/*
* 有序集合中的元素具有顺序性，基于搜索树实现
* 无序集合中的元素没有顺序性，基于哈希表实现
* */

export class ISet {
  constructor() {
    this._data = [];
    this._size = 0;
  }

  add(e) {
    if (this.has(e) === -1) {
      this._data.push(e);
      this._size++;
    }
  }

  remove(e) {
    if (this.isEmpty()) {
      return;
    }
    const index = this.has(e);
    if (index > 0) {
      this._data.splice(index, 1);
      this._size--;
    }
  }

  has(e) {
    for (let i = 0; i < this.size; i++) {
      if (this._data[i] === e) {
        return i;
      }
    }
    return -1;
  }

  isEmpty() {
    return this.size === 0;
  }

  get size() {
    return this._size;
  }

  clear() {
    this._data.splice(0, this.size);
    this._size = 0;
  }

}
