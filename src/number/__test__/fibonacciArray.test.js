import fibonacciArray from '../fibonacciArray';

describe('测试 fibonacciArray', () => {
  test('01 测试正常参数', () => {
    expect(fibonacciArray(0)).toEqual([0]);
    expect(fibonacciArray(6)).toEqual([0, 1, 1, 2, 3, 5]);
  });

  test('01 测试错误参数', () => {
    expect(fibonacciArray(-1)).toEqual([]);
    expect(fibonacciArray()).toEqual([]);
    expect(fibonacciArray(null)).toEqual([]);
    expect(fibonacciArray('hello')).toEqual([]);
  });

});
