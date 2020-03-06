import ListNode from './ListNode';

class DoubleLinkedList<T> {

  private head: ListNode<T>;
  private tail: ListNode<T>;
  private listSize: number;

  constructor() {
    this.head = this.tail = null;
    this.listSize = 0;
  }

  // 从末尾追加，不做去重操作
  append(value: T) {

    const newNode = new ListNode<T>(value);

    if (this.tail) {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    } else {
      this.head = this.tail = newNode;
    }
    this.listSize++;
  }

  // 从开头追加
  prepend(value: T) {
    const newNode = new ListNode<T>(value);

    if (this.head) {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    } else {
      this.head = this.tail = newNode;
    }
    this.listSize++;
  }

  // 删除某一个值
  delete(value: T): boolean | T {
    let currentNode = this.head;

    if (!currentNode) {
      return false;
    }

    // 删除的是第一个节点
    if (currentNode.value === value) {
      this.head = currentNode.next;
      this.head.prev = null;
      currentNode.next = currentNode.prev = null;
      this.listSize--;
      return currentNode.value;
    }

    // 删除的不是第一个节点
    // 遍历查找要删除节点
    while (true) {

      // 如果当前节点的值等于要删除的值
      if (currentNode.value === value) {

        // 如果当前节点不是尾节点
        if (currentNode.next) {

          // 让当前节点的 next 赋值给当前节点的前驱的 next
          currentNode.prev.next = currentNode.next;

          // 让当前节点的 prev 赋值给当前节点的后继的 prev
          currentNode.next.prev = currentNode.prev;

        } else {

          // 如果当前节点是尾节点
          // 让当前节点的前驱的 next 指向 null
          currentNode.prev.next = null;

          // 当前节点的前驱就是尾节点 tail
          this.tail = currentNode.prev;

        }

        // 清除当前节点的 prev 和 next 指向
        currentNode.next = currentNode.prev = null;

        this.listSize--;
        return currentNode.value;
      }

      // 当前节点的不是要删除的值，并且当前节点有下一个节点
      if (currentNode.next) {
        currentNode = currentNode.next;
      } else {
        // 如果在链表中没找到要删除的节点，那么直接返回 undefined
        return false;
      }
    }
  }

  // 插入节点
  insert(value: T, previousNode: T): boolean {
    const newNode = new ListNode(value);

    // currentNode 要做一个遍历，每次遍历的时候，都要判断 currentNode.value 是否等于 previousNode
    let currentNode = this.head;

    // 表示链表中没有节点
    if (!currentNode) {
      return false;
    }

    while (true) {

      // 如果找到了前一个节点
      if (currentNode.value === previousNode) {

        // 新节点的 next 是当前节点的 next
        newNode.next = currentNode.next;

        // 新节点的 prev 是当前节点
        newNode.prev = currentNode;

        // 当前节点的 next 就是新节点
        currentNode.next = newNode;

        // 如果新节点有下一个节点
        if (newNode.next) {

          // 当前节点的后继节点的前驱节点就是新节点
          currentNode.next.prev = newNode;

        } else {

          // 新节点就是尾节点
          this.tail = newNode;

        }

        this.listSize++;
        return true;
      }
      if (currentNode.next) {
        currentNode = currentNode.next;
      } else {
        return false;
      }
    }
  }

}

export default DoubleLinkedList;