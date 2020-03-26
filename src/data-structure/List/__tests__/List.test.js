import { List } from '../List';

const defaultSize = 10;

describe('测试 List', () => {
  test('#01 创建一个空的 List————构造函数无参', () => {
    const list = new List();

    expect(list.size).toEqual(defaultSize);
    expect(list.capacity).toEqual(0);
    expect(list.head).toEqual(null);
    expect(list.tail).toEqual(null);
    expect(list.isEmpty()).toEqual(true);
    expect(list.isFull()).toEqual(false);
  });

  test('#02 创建一个空的 List————构造函数有参', () => {
    const list = new List(5);

    expect(list.size).toEqual(5);
    expect(list.capacity).toEqual(0);
    expect(list.head).toEqual(null);
    expect(list.tail).toEqual(null);
    expect(list.isEmpty()).toEqual(true);
    expect(list.isFull()).toEqual(false);
  });

  test('#03 创建一个长度为 5 的 List————末尾添加元素', () => {
    const list = new List(5);

    expect(list.size).toEqual(5);
    expect(list.append(1)).toEqual(true);
    expect(list.capacity).toEqual(1);
    expect(list.head.value).toEqual(1);
    expect(list.head.next).toEqual(null);
    expect(list.tail.value).toEqual(1);
    expect(list.tail.prev).toEqual(null);
    expect(list.isEmpty()).toEqual(false);
    expect(list.isFull()).toEqual(false);
    expect(list.append(2)).toEqual(true);
    expect(list.append(3)).toEqual(true);
    expect(list.append(4)).toEqual(true);
    expect(list.append(5)).toEqual(true);
    expect(list.isFull()).toEqual(true);
    expect(list.append(6)).toEqual(null);
  });

  test('#04 创建一个长度为 5 的 List————首部添加元素', () => {
    const list = new List(5);

    for (let i = 1; i <= 5; i++) {
      expect(list.prepend(i)).toEqual(true);
    }
    expect(list.prepend(6)).toEqual(null);

    let currentListNode = list.head;

    for (let i = 5; i > 0; i--) {
      expect(currentListNode.value).toEqual(i);
      currentListNode = currentListNode.next;
    }
    expect(list.traverse()).toEqual([5, 4, 3, 2, 1]);
  });

  test('#05 创建一个长度为 5 的 List————在某个节点前添加元素', () => {
    const list = new List(5);

    for (let i = 1; i <= 4; i++) {
      expect(list.append(i)).toEqual(true);
    }
    expect(list.insert(5, 3)).toEqual(true);
    expect(list.insert(6)).toEqual(null);
    expect(list.traverse()).toEqual([1, 2, 3, 5, 4]);
  });

  test('#06 创建一个长度为 5 的 List————空 List，在某个节点前添加元素', () => {
    const list = new List(5);
    expect(list.insert(5, 1)).toEqual(null);
  });

});
