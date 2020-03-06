import initialize2DArray from '../initialize2DArray';

describe('test deepGet', () => {

  test('01 测试 正常参数', () => {
    const testResult = [[1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1]];
    expect(initialize2DArray(4, 4, 1)).toEqual(testResult);

    expect(initialize2DArray(4, 0, 1)).toEqual([[], [], [], []]);
  });

  test('02 测试 错误参数', () => {
    expect(initialize2DArray(-1, -1, 1)).toEqual([]);
    expect(initialize2DArray(0, 0, 1)).toEqual([]);
    expect(initialize2DArray(-1, 0, 1)).toEqual([]);
    expect(initialize2DArray('-1', '', 1)).toEqual([]);
    expect(initialize2DArray()).toEqual([]);
  });

});
