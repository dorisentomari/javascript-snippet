import hexToRGB from '../hexToRGB';

describe('测试 hexToRGB', () => {
  test('01 测试 正常参数', () => {
    expect(hexToRGB('#fff')).toEqual('rgb(255, 255, 255)');
    expect(hexToRGB('fff')).toEqual('rgb(255, 255, 255)');
    expect(hexToRGB('#000000')).toEqual('rgb(0, 0, 0)');
    expect(hexToRGB('000000')).toEqual('rgb(0, 0, 0)');
    expect(hexToRGB('#ffffffff')).toEqual('rgba(255, 255, 255, 255)');
    expect(hexToRGB('ff00ff00')).toEqual('rgba(255, 0, 255, 0)');
  });

  test('02 测试 错误参数', () => {
    expect(hexToRGB()).toEqual(undefined);
    expect(hexToRGB('')).toEqual('');
    expect(hexToRGB({})).toEqual({});
    expect(hexToRGB('xzxz')).toEqual('rgb(0, 0, 0)');
  });
});
