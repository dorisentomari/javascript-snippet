import deepClone from '../deepClone';

const o1 = { name: 'jack', home: { shanghai: { area: 'pudong' }, beijing: { area: 'chaoyang' } } };

const a1 = [
  [0, 0, 0, 0],
  [1, 1, 1, 1],
  [2, 2, 2, 2],
];

const o2 = {
  matrix: a1
};

const a2 = [{ name: 'jack', home: 'shanghai' }, { name: 'mark', home: 'beijing' }];

describe('test deepClone', () => {

  test('01 测试 正常参数', () => {
    expect(deepClone(o1)).toEqual({
      name: 'jack',
      home: { shanghai: { area: 'pudong' }, beijing: { area: 'chaoyang' } }
    });
    expect(deepClone(o2)).toEqual({ matrix: a1 });
    expect(deepClone(a1)).toEqual([[0, 0, 0, 0], [1, 1, 1, 1], [2, 2, 2, 2]]);
    expect(deepClone(a2)).toEqual([{ name: 'jack', home: 'shanghai' }, { name: 'mark', home: 'beijing' }]);
  });

  test('02 测试 错误参数', () => {
    expect(deepClone(null)).toEqual(null);
    expect(deepClone(undefined)).toEqual(undefined);
    expect(deepClone('')).toEqual({});
    expect(deepClone(0)).toEqual({});
  });

});
