import objectToQueryString from '../objectToQueryString';

let obj = {
  name: 'mark',
  age: 18,
  home: 'shanghai',
  isStudent: true,
  address: {
    city: 'shanghai',
    area: 'pudong',
    street: 'shijidadao No.100'
  }
};

describe('test objectToQueryString', () => {

  test('01 测试 正常参数', () => {
    let expectResult = '?name=mark&age=18&home=shanghai&isStudent=true';
    expect(objectToQueryString(obj)).toEqual(expectResult);
  });

  test('02 测试 参数为空', () => {
    expect(objectToQueryString()).toEqual('');
  });

});
