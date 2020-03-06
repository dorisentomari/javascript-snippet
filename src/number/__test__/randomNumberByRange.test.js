import randomNumberByRange from '../randomNumberByRange';

describe('测试 randomNumberByRange', () => {
  test('01 测试没有边界值', () => {
    const TEST_TIMES = 50000;

    const testResult = [];
    for (let i = 0; i < TEST_TIMES; i++) {
      testResult.push(randomNumberByRange(3, 7));
    }

    expect(testResult).not.toContain(3);
    expect(testResult).toContain(4);
    expect(testResult).toContain(5);
    expect(testResult).toContain(6);
    expect(testResult).not.toContain(7);
  });

  test('02 测试有左边界值', () => {
    const TEST_TIMES = 50000;

    const testResult = [];
    for (let i = 0; i < TEST_TIMES; i++) {
      testResult.push(randomNumberByRange(3, 7, { withLeftMargin: true }));
    }

    expect(testResult).toContain(3);
    expect(testResult).toContain(4);
    expect(testResult).toContain(5);
    expect(testResult).toContain(6);
    expect(testResult).not.toContain(7);
  });

  test('03 测试有右边界值', () => {
    const TEST_TIMES = 50000;

    const testResult = [];
    for (let i = 0; i < TEST_TIMES; i++) {
      testResult.push(randomNumberByRange(3, 7, { withRightMargin: true }));
    }

    expect(testResult).not.toContain(3);
    expect(testResult).toContain(4);
    expect(testResult).toContain(5);
    expect(testResult).toContain(6);
    expect(testResult).toContain(7);

  });

  test('04 测试两侧边界值', () => {
    const TEST_TIMES = 50000;

    const testResult = [];
    for (let i = 0; i < TEST_TIMES; i++) {
      testResult.push(randomNumberByRange(3, 7, { withLeftMargin: true, withRightMargin: true }));
    }

    expect(testResult).toContain(3);
    expect(testResult).toContain(4);
    expect(testResult).toContain(5);
    expect(testResult).toContain(6);
    expect(testResult).toContain(7);

  });

  test('05 测试错误参数', () => {
    expect(randomNumberByRange()).toEqual(0);
    expect(randomNumberByRange('a')).toEqual(0);
    expect(randomNumberByRange('a', 'b')).toEqual(0);
    expect(randomNumberByRange(10, 'b')).toEqual(0);
    expect(randomNumberByRange('a', 30)).toEqual(0);
  });

});
