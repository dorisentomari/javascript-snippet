import getDaysDiffBetweenDates from '../getDaysDiffBetweenDates';

describe('测试 getDaysDiffBetweenDates', () => {
  test('01 测试 正常参数', () => {
    expect(getDaysDiffBetweenDates('2019-01-01', '2019-01-01')).toEqual(0);
    expect(getDaysDiffBetweenDates('2019-01-01', '2019-01-02')).toEqual(1);
    expect(getDaysDiffBetweenDates('2018-12-31', '2019-01-01')).toEqual(1);
    expect(getDaysDiffBetweenDates('2018-12-31', '2019-12-31')).toEqual(365);
  });

  test('02 测试 错误参数', () => {
    expect(getDaysDiffBetweenDates('xxx')).toEqual(0);
    expect(getDaysDiffBetweenDates('xxx', 'xxx')).toEqual(0);
    expect(getDaysDiffBetweenDates('2019-01-01', 'xxx')).toEqual(0);
    expect(getDaysDiffBetweenDates('xxx', '2019-01-01')).toEqual(0);
  });
});
