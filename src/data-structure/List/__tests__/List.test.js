import { List } from '../List';

const defaultSize = 10;

describe('测试 List', () => {
  test('#01 构造函数无参', () => {
    const list = new List();

    expect(list.size).toEqual(defaultSize);
    expect(list.capacity).toEqual(0);
    expect(list.head).toEqual(null);
    expect(list.tail).toEqual(null);
    expect(list.isEmpty()).toEqual(true);
    expect(list.isFull()).toEqual(false);
  });

  test('#02 构造函数有参', () => {
    const list = new List(5);

    expect(list.size).toEqual(5);
    expect(list.capacity).toEqual(0);
    expect(list.head).toEqual(null);
    expect(list.tail).toEqual(null);
    expect(list.isEmpty()).toEqual(true);
    expect(list.isFull()).toEqual(false);
  });

  test('#03 末尾添加元素', () => {
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

  test('#04 首部添加元素', () => {
    const list = new List(5);

    expect(list.prepend(1)).toEqual(true);
    expect(list.prepend(2)).toEqual(true);
    expect(list.prepend(3)).toEqual(true);
    expect(list.prepend(4)).toEqual(true);
    expect(list.prepend(5)).toEqual(true);
    expect(list.prepend(6)).toEqual(null);

    let currentListNode = list.head;

    for (let i = 5; i > 0; i--) {
      expect(currentListNode.value).toEqual(i);
      currentListNode = currentListNode.next;
    }
    expect(list.traverse()).toEqual([5, 4, 3, 2, 1]);
  });

  test('#05 在某个节点前添加元素01', () => {
    const list = new List(5);

    expect(list.append(1)).toEqual(true);
    expect(list.append(2)).toEqual(true);
    expect(list.append(3)).toEqual(true);
    expect(list.append(4)).toEqual(true);
    expect(list.insert(5, 4)).toEqual(true);
    expect(list.insert(6)).toEqual(null);
    expect(list.traverse()).toEqual([1, 2, 3, 4, 5]);
  });

  test('#06 在某个节点前添加元素02', () => {
    const list = new List(5);

    expect(list.insert(4, 3)).toEqual(null);
    expect(list.append(1)).toEqual(true);
    expect(list.append(2)).toEqual(true);
    expect(list.insert(3, 2)).toEqual(true);
    expect(list.insert(4, 2)).toEqual(true);
    expect(list.insert(5, 7)).toEqual(null);
    expect(list.traverse()).toEqual([1, 2, 4, 3]);
  });

  test('#07 移除任意元素', () => {
    const list = new List(5);

    expect(list.remove(3)).toEqual(null);
    expect(list.append(1)).toEqual(true);
    expect(list.append(2)).toEqual(true);
    expect(list.append(3)).toEqual(true);
    expect(list.append(4)).toEqual(true);
    expect(list.append(5)).toEqual(true);
    expect(list.remove(1)).toEqual(1);
    expect(list.traverse()).toEqual([2, 3, 4, 5]);
    expect(list.remove(3)).toEqual(3);
    expect(list.traverse()).toEqual([2, 4, 5]);
    expect(list.remove(5)).toEqual(5);
    expect(list.traverse()).toEqual([2, 4]);
    expect(list.remove(7)).toEqual(null);
  });

  test('#08 移除首元素', () => {
    const list = new List(5);

    expect(list.removeHead()).toEqual(null);
    expect(list.append(1)).toEqual(true);
    expect(list.removeHead()).toEqual(1);
    expect(list.append(2)).toEqual(true);
    expect(list.append(3)).toEqual(true);
    expect(list.append(4)).toEqual(true);
    expect(list.append(5)).toEqual(true);
    expect(list.removeHead()).toEqual(2);
    expect(list.traverse()).toEqual([3, 4, 5]);
  });

  test('#09 移除尾元素', () => {
    const list = new List(5);

    expect(list.removeTail()).toEqual(null);
    expect(list.append(1)).toEqual(true);
    expect(list.removeTail()).toEqual(1);
    expect(list.append(2)).toEqual(true);
    expect(list.append(3)).toEqual(true);
    expect(list.append(4)).toEqual(true);
    expect(list.append(5)).toEqual(true);
    expect(list.removeTail()).toEqual(5);
    expect(list.traverse()).toEqual([2, 3, 4]);
  });

});
