
export class UnionFindTestHelper {
  constructor(UnionFind, n, name) {
    this.UnionFind = UnionFind;
    this.n = n;
    this.name = name;
  }

  test() {
    const unionFind = new this.UnionFind(this.n);
    console.time(this.name);

    for (let i = 0; i < this.n; i++) {
      const a = Math.floor(Math.random() * this.n);
      const b = Math.floor(Math.random() * this.n);
      unionFind.unionElements(a, b);
    }

    for (let i = 0; i < this.n; i++) {
      const a = Math.floor(Math.random() * this.n);
      const b = Math.floor(Math.random() * this.n);
      unionFind.isConnected(a, b);
    }
    console.timeEnd(this.name);
  }

}


import { UnionFind1, UnionFind2, UnionFind3, UnionFind4, UnionFind5, UnionFind6 } from './UnionFind';

export const test = () => {
  const n = 1000000;
  const testHelper1 = new UnionFindTestHelper(UnionFind1, n, 'UnionFind1');
  testHelper1.test();

  const testHelper2 = new UnionFindTestHelper(UnionFind2, n, 'UnionFind2');
  testHelper2.test();
  
  const testHelper3 = new UnionFindTestHelper(UnionFind3, n, 'UnionFind3');
  testHelper3.test();

  const testHelper4 = new UnionFindTestHelper(UnionFind4, n, 'UnionFind4');
  testHelper4.test();

  const testHelper5 = new UnionFindTestHelper(UnionFind5, n, 'UnionFind5');
  testHelper5.test();

  const testHelper6 = new UnionFindTestHelper(UnionFind6, n, 'UnionFind6');
  testHelper6.test();
};


