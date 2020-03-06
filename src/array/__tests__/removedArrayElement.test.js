import removedArrayElement from '../removedArrayElement';

describe('test removeArrayElement', () => {

  test('01 数组只有纯数字 removeArrayElement', () => {
    const arr = [1, 2, 3, 4];

    const testResult = removedArrayElement(arr, x => x % 2 === 0);

    expect(testResult).toHaveLength(2);
    expect(testResult).toEqual([2,4]);

  });

  test('02 数组含有非 0 的 falsy 值 removeArrayElement', () => {
    const arr = [1, 2, 3, 4, 5, 6, '', false, undefined, null];

    const testResult = removedArrayElement(arr, x => x % 2 === 0);

    expect(testResult).toHaveLength(6);
    expect(testResult).toEqual([2,4,6,'',false,null]);

  });

  test('03 参数不是数组', () => {
    const emptyArr = [];

    let testResult = removedArrayElement(null, x => x % 2 === 0);
    expect(testResult).toHaveLength(0);
    expect(testResult).toEqual(emptyArr);

    testResult = removedArrayElement({}, x => x % 2 === 0);
    expect(testResult).toHaveLength(0);
    expect(testResult).toEqual(emptyArr);

    testResult = removedArrayElement(undefined, x => x % 2 === 0);
    expect(testResult).toHaveLength(0);
    expect(testResult).toEqual(emptyArr);

    testResult = removedArrayElement(0, x => x % 2 === 0);
    expect(testResult).toHaveLength(0);
    expect(testResult).toEqual(emptyArr);

    testResult = removedArrayElement('hello', x => x % 2 === 0);
    expect(testResult).toHaveLength(0);
    expect(testResult).toEqual(emptyArr);

  });

  test('04 参数是空数组', () => {
    const emptyArr = [];

    const testResult = removedArrayElement([], x => x % 2 === 0);
    expect(testResult).toHaveLength(0);
    expect(testResult).toEqual(emptyArr);
  });

});
