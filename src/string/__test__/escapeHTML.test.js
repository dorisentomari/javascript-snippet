import escapeHTML from '../escapeHTML';

describe('测试 escapeHTML', () => {
  test('01 测试 正常参数', () => {
    expect(escapeHTML('hello')).toEqual('hello');
    expect(escapeHTML('<a href="http://www.google.com">google</a>')).toEqual('&lt;a href=&quot;http://www.google.com&quot;&gt;google&lt;/a&gt;');
  });

  test('02 测试 错误参数', () => {
    expect(escapeHTML()).toEqual('');
    expect(escapeHTML('')).toEqual('');
    expect(escapeHTML({})).toEqual({});
  });
});
