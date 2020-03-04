import deepGet from '../deepGet';

const targetData = 'shijidadao';

const obj = {
  user: {
    name: 'mark',
    address: {
      shanghai: {
        area: 'pudong',
        street: targetData
      },
      beijing: {
        area: 'chaoyang',
        street: 'chaowaidajie'
      },
      street: 'address street'
    }
  }
};

describe('test deepGet', () => {

  test('01 测试 正常参数', () => {
    expect(deepGet(obj, ['user', 'address', 'shanghai', 'street'])).toEqual(targetData);
    expect(deepGet(obj, ['user', 'address', 'street', 'shanghai'])).toEqual(null);
  });

  test('02 测试 错误参数', () => {
    expect(deepGet()).toEqual(null);
    expect(deepGet(undefined, undefined)).toEqual(null);
    expect(deepGet(obj)).toEqual(null);
    expect(deepGet(obj, 0)).toEqual(null);
  });

});
