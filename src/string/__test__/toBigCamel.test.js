import toBigCamel from '../toBigCamel';

describe('测试 toBigCamel', () => {
  test('01 测试 正常参数', () => {
    expect(toBigCamel('hello')).toEqual('hello');
    expect(toBigCamel('hello_world_')).toEqual('helloWorld_');
    expect(toBigCamel('hello_world')).toEqual('helloWorld');
  });

  test('02 测试 错误参数', () => {
    expect(toBigCamel()).toEqual('');
    expect(toBigCamel('')).toEqual('');
    expect(toBigCamel({})).toEqual('');
  });
});
