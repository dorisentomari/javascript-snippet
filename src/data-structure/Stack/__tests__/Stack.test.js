import { Stack } from '../Stack.js';

describe('测试 Stack', () => {

  test('01 Stack', () => {
    const stack = new Stack(5);
    expect(stack.isEmpty()).toEqual(true);
    expect(stack.isFull()).toEqual(false);
    expect(stack.size()).toEqual(5);

    expect(stack.push(1)).toEqual(true);
    expect(stack.capacity()).toEqual(1);
    expect(stack.isEmpty()).toEqual(false);
    expect(stack.isFull()).toEqual(false);

    expect(stack.push(2)).toEqual(true);
    expect(stack.capacity()).toEqual(2);
    expect(stack.isEmpty()).toEqual(false);
    expect(stack.isFull()).toEqual(false);

    expect(stack.push(3)).toEqual(true);
    expect(stack.push(4)).toEqual(true);
    expect(stack.push(5)).toEqual(true);

    expect(stack.capacity()).toEqual(5);
    expect(stack.isEmpty()).toEqual(false);
    expect(stack.isFull()).toEqual(true);

    expect(stack.traverse()).toEqual([1, 2, 3, 4, 5]);

    expect(stack.push(6)).toEqual(false);
    expect(stack.capacity()).toEqual(5);

    expect(stack.pop()).toEqual(5);
    expect(stack.capacity()).toEqual(4);
    expect(stack.pop()).toEqual(4);
    expect(stack.capacity()).toEqual(3);
    expect(stack.top()).toEqual(3);

    expect(stack.clear()).toEqual(true);
    expect(stack.pop()).toEqual(null);
    expect(stack.top()).toEqual(null);
    expect(stack.capacity()).toEqual(0);
    expect(stack.traverse()).toEqual([]);

    const newStack = new Stack();
    expect(newStack.capacity()).toEqual(0);
    expect(newStack.size()).toEqual(10);
  });
});


