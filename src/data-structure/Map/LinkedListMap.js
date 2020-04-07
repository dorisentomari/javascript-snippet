class MapNode {
  constructor(key = null, value = null, next = null) {
    this.key = key;
    this.value = value;
    this.next = next;
  }
}

export class LinkedListMap {

  constructor() {
    this.dummyNode = new MapNode();
    this._size = 0;
  }

  getNode(key) {
    let currentNode = this.dummyNode.next;
    while (currentNode !== null) {
      console.log('----', currentNode);
      if (currentNode.key === key) {
        return currentNode;
      }
      currentNode = currentNode.next;
    }
    return null;
  }

  add(key, value) {
    const node = this.getNode(key);
    if (node === null) {
      this.dummyNode.next = new MapNode(key, value, this.dummyNode.next);
      this._size++;
    } else {
      node.value = value;
    }
  }

  get(key) {
    const result = this.getNode(key);
    if (result === null) {
      return null;
    }
    return result.value;
  }

  set(key, value) {
    const node = this.getNode(key);
    if (node === null) {
      return null;
    } else {
      node.value = value;
    }
  }

  remove(key) {
    const node = this.getNode(key);
    if (node === null) {
      return null;
    }

    let prev = this.dummyNode;
    while (prev.next !== null) {
      if (prev.next.key === key) {
        break;
      }
      prev = prev.next;
    }

    if (prev.next === null) {
      const delNode = prev.next;
      prev.next = delNode.next;
      delNode.next = null;
      this._size--;
      return delNode.value;
    }

    return null;
  }

  contains(key) {
    return this.getNode(key) !== null;
  }

  get size() {
    return this._size;
  }

  isEmpty() {
    return this._size === 0;
  }
}


