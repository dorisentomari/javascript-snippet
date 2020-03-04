import uniqueElementsBy from '../uniqueElementsBy';

const arr = [
  { id:1, score: 80 },
  { id:2, score: 83 },
  { id:1, score: 90 },
  { id:3, score: 85 },
  { id:4, score: 88 }
];

describe('test uniqueElementsBy', () => {

  test('01 测试 正常参数', () => {
    let expectResult = [
      { id:1, score: 80 },
      { id:2, score: 83 },
      { id:3, score: 85 },
      { id:4, score: 88 }
    ];

    let testResult = uniqueElementsBy(arr, (curr, v) => curr.id === v.id);
    expect(testResult).toEqual(expectResult);
  });

  test('02 测试 错误参数', () => {
    expect(uniqueElementsBy(null)).toEqual([]);
    expect(uniqueElementsBy()).toEqual([]);
  });

});