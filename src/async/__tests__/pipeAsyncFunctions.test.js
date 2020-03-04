import pipeAsyncFunctions from '../pipeAsyncFunctions';

describe('test pipeAsyncFunctions', () => {

  it('01 全部同步方法', async () => {

    const sum = pipeAsyncFunctions(
      x => x + 1,
      x => x + 3,
      x => x * x
    );

    const data = await sum(5);

    expect(data).toEqual(81);

  });

  it('02 全部异步方法 setTimeout, async/await/promise', async () => {

    const sum = pipeAsyncFunctions(
      x => new Promise(resolve => setTimeout(() => resolve(x + 2), 1000)),
      x => new Promise(resolve => setTimeout(() => resolve(x + 4), 1000)),
      async x => (await x) + 4
    );

    const data = await sum(5);

    expect(data).toEqual(15);

  });

});