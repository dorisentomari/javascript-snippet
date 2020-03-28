import { fibonacci } from '../fibonacci';

describe('测试 fibonacci', () => {
  test('#01 fibonacci', () => {
    expect(fibonacci(0)).toEqual(null);
    expect(fibonacci(1)).toEqual(1);
    expect(fibonacci(2)).toEqual(1);
    expect(fibonacci(3)).toEqual(2);
    expect(fibonacci(4)).toEqual(3);
    expect(fibonacci(5)).toEqual(5);
  });

});
