import formatDuration from '../formatDuration';

describe('测试 formatDuration', () => {
  test('01 测试 正常参数', () => {
    expect(formatDuration(1001)).toEqual('1 second, 1 millisecond');
    expect(formatDuration(1002)).toEqual('1 second, 2 milliseconds');
    expect(formatDuration(0)).toEqual('');
  });

  test('02 测试 错误参数', () => {
    expect(formatDuration('xxx')).toEqual('');
    expect(formatDuration({})).toEqual('');
  });
});