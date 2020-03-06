class ListNode<T> {
  value: T;
  prev: ListNode<T>;
  next: ListNode<T>;

  constructor(value: T) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

export default ListNode;
