import permutations from '../permutations';

describe('test permutations', () => {

  test('01 permutations 无参数和错误参数', () => {
    expect(permutations()).toEqual([]);
    expect(permutations(null)).toEqual([]);
  });

  test('02 permutations 参数数组里有 1 个或 2 个元素', () => {
    expect(permutations([1])).toEqual([1]);
    expect(permutations([1, 2])).toEqual([[1, 2], [2, 1]]);
  });

  test('03 permutations 参数数组里有 3 个元素', () => {
    const result = [
      [1, 2, 3],
      [1, 3, 2],
      [2, 1, 3],
      [2, 3, 1],
      [3, 1, 2],
      [3, 2, 1],
    ];
    expect(permutations([1, 2, 3])).toEqual(result);
  });
});
