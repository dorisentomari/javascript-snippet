import { ListNode } from './ListNode';

export class List {
  constructor(size = 10) {
    this._head = this._tail = null;
    this._size = size;
    this._capacity = 0;
  }

  * iterator() {
    let currentNode = this._head;
    while (currentNode) {
      yield currentNode.value;
      currentNode = currentNode.next;
    }
  }

  [Symbol.iterator]() {
    return this.iterator();
  }

  get head() {
    return this._head;
  }

  get tail() {
    return this._tail;
  }

  get capacity() {
    return this._capacity;
  }

  get size() {
    return this._size;
  }

  isFull() {
    return this._size === this._capacity;
  }

  isEmpty() {
    return this._capacity === 0;
  }

  // 末尾添加元素
  append(value) {
    if (this.isFull()) {
      return null;
    }

    const newListNode = new ListNode(value);

    if (!this._tail) {
      this._head = this._tail = newListNode;
    } else {
      this._tail.next = newListNode;
      newListNode.prev = this._tail;
      this._tail = newListNode;
    }

    this._capacity++;
    return true;
  }

  // 首部添加元素
  prepend(value) {
    if (this.isFull()) {
      return null;
    }

    const newListNode = new ListNode(value);

    if (!this._head) {
      this._head = this._tail = newListNode;
    } else {
      newListNode.next = this._head;
      this._head.prev = newListNode;
      this._head = newListNode;
    }

    this._capacity++;
    return true;
  }

  // 在某个节点后添加元素
  insert(value, prevValue) {
    if (this.isFull()) {
      return null;
    }

    const newListNode = new ListNode(value);

    let currentListNode = this._head;

    if (!this._head) {
      return null;
    }

    while (true) {
      if (currentListNode.value === prevValue) {
        newListNode.next = currentListNode.next;
        newListNode.prev = currentListNode;
        currentListNode.next = newListNode;

        if (newListNode.next) {
          newListNode.next.prev = newListNode;
        } else {
          // 尾节点
          this._tail = newListNode;
        }
        this._capacity++;
        return true;
      } else {
        if (currentListNode.next) {
          currentListNode = currentListNode.next;
        } else {
          return null;
        }
      }
    }

  }

  // 移除任意元素
  remove(value) {
    if (this.isEmpty()) {
      return null;
    }

    let currentListNode = this._head;

    if (currentListNode.value === value) {
      this._head = currentListNode.next;
      if (this._head) {
        this._head.prev = null;
      }

      currentListNode.next = currentListNode.prev = null;
      this._capacity--;
      return value;
    }

    while (true) {
      if (currentListNode.value === value) {
        if (currentListNode.next) {
          currentListNode.prev.next = currentListNode.next;
          currentListNode.next.prev = currentListNode.prev;
          currentListNode.next = currentListNode.prev = null;
        } else {
          currentListNode.prev.next = null;
          this._tail = currentListNode.prev;
          currentListNode.next = currentListNode.prev = null;
        }
        this._capacity--;
        return currentListNode.value;
      } else {
        if (currentListNode.next) {
          currentListNode = currentListNode.next;
        } else {
          return null;
        }
      }
    }


  }

  // 移除首元素
  removeHead() {
    if (this.isEmpty()) {
      return null;
    }

    const currentListNode = this._head;

    if (!this._head.next) {
      this._head = null;
      this._tail = null;
    } else {
      this._head.next.prev = null;
      this._head = this._head.next;
      currentListNode.next = currentListNode.prev = null;
    }

    this._capacity--;
    return currentListNode.value;
  }

  // 移除尾元素
  removeTail() {
    if (this.isEmpty()) {
      return null;
    }

    const currentListNode = this._tail;

    if (!this._tail.prev) {
      this._head = null;
      this._tail = null;
    } else {
      this._tail.prev.next = null;
      this._tail = this._tail.prev;
      currentListNode.next = currentListNode.prev = null;
    }

    this._capacity--;
    return currentListNode.value;
  }

  // 遍历
  traverse() {
    return [...this];
  }

}
