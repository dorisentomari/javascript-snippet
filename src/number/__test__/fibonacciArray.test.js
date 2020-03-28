import fibonacciArray from '../fibonacciArray';

describe('测试 fibonacciArray', () => {
  test('01 测试正常参数', () => {
    expect(fibonacciArray(0)).toEqual([]);
    expect(fibonacciArray(1)).toEqual([1]);
    expect(fibonacciArray(2)).toEqual([1, 1]);
    expect(fibonacciArray(3)).toEqual([1, 1, 2]);
    expect(fibonacciArray(4)).toEqual([1, 1, 2, 3]);
    expect(fibonacciArray(5)).toEqual([1, 1, 2, 3, 5]);
    expect(fibonacciArray(6)).toEqual([1, 1, 2, 3, 5, 8]);
  });

  test('02 测试错误参数', () => {
    expect(fibonacciArray(-1)).toEqual([]);
    expect(fibonacciArray()).toEqual([]);
    expect(fibonacciArray(null)).toEqual([]);
    expect(fibonacciArray('hello')).toEqual([]);
  });

});
