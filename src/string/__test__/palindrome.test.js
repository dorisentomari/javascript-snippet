import palindrome from '../palindrome';

describe('测试 palindrome', () => {
  test('01 测试 正常参数', () => {
    expect(palindrome('hello')).toEqual(false);
    expect(palindrome('helleh')).toEqual(true);
  });

  test('02 测试 错误参数', () => {
    expect(palindrome()).toEqual(false);
    expect(palindrome({})).toEqual(false);
  });
});
