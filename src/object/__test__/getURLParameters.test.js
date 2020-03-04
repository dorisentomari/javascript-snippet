import getURLParameters from '../getURLParameters';

describe('test getURLParameters', () => {

  test('01 测试 正常参数', () => {
    let url = 'https://www.30secondsofcode.org/js/s/get-url-parameters/?name=mark&age=18&home=&address=shanghai';
    const data = {
      name: 'mark',
      age: '18',
      home: '',
      address: 'shanghai'
    };
    expect(getURLParameters(url)).toEqual(data);
  });

  test('02 测试 错误参数', () => {
    expect(getURLParameters()).toEqual({});
    expect(getURLParameters(undefined)).toEqual({});
    expect(getURLParameters(null)).toEqual({});
  });

});
