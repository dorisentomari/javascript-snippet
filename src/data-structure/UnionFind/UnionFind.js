/*
* 【并查集】Union Find
* 一种树形数据结构，用于处理一些不交集的合并及查询问题。
* Union 将两个子集合并成同一个集合
* Find 确定元素属于哪一个子集，它可以被用来确定两个元素是否属于同一个子集
*
* 可以解决连接问题(connection problem)
*   判断网络节点间的连接状态（广义的网络关系（好友关系，人物关系，网络关系，路由器网络，道路交通，航班））
* 可以实现数学的集合类的实现
*
* 连接问题，两个节点是否能连接
* 路径问题，两个节点之间的路径是什么
*
* 并查集的操作，时间复杂度近乎是 O(1)
* */

export class UnionFind1 {
  constructor(size) {
    this.id = [];

    this._size = size;
    for (let i = 0; i < size; i++) {
      this.id.push(i);
    }
  }

  find(p) {
    return this.id[p];
  }

  isConnected(p, q) {
    return this.find(p) === this.find(q);
  }

  unionElements(p, q) {
    const pId = this.find(p);
    const qId = this.find(q);

    if (pId === qId) {
      return null;
    }

    for (let i = 0; i < this._size; i++) {
      if (this.id[i] === pId) {
        this.id[i] = qId;
      }
    }
  }
}

export class UnionFind2 {
  constructor(size) {
    this.parent = [];

    this._size = size;
    for (let i = 0; i < size; i++) {
      this.parent.push(i);
    }
  }

  find(p) {
    if (p >= 0 && p <= this._size) {
      while (p !== this.parent[p]) {
        p = this.parent[p];
      }
    }
    return p;
  }

  isConnected(p, q) {
    return this.find(p) === this.find(q);
  }

  unionElements(p, q) {
    const pRoot = this.find(p);
    const qRoot = this.find(q);

    if (pRoot === qRoot) {
      return null;
    }

    this.parent[pRoot] = qRoot;
  }
}

// good
export class UnionFind3 {
  constructor(size) {
    this.parent = [];
    // sz 表示以 i 为根的集合中元素的个数
    this.sz = [];

    this._size = size;
    for (let i = 0; i < size; i++) {
      this.parent.push(i);
      this.sz[i] = 1;
    }
  }

  find(p) {
    if (p >= 0 && p <= this._size) {
      while (p !== this.parent[p]) {
        p = this.parent[p];
      }
    }
    return p;
  }

  isConnected(p, q) {
    return this.find(p) === this.find(q);
  }

  unionElements(p, q) {
    const pRoot = this.find(p);
    const qRoot = this.find(q);

    if (pRoot === qRoot) {
      return null;
    }

    if (this.sz[pRoot] < this.sz[qRoot]) {
      this.parent[pRoot] = qRoot;
      this.sz[qRoot] += this.sz[pRoot];
    } else {
      this.parent[qRoot] = pRoot;
      this.sz[pRoot] += this.sz[qRoot];
    }
  }
}

// good 基于 rank 的优化，rank[i] 表示根节点为 i 的树的高度
export class UnionFind4 {
  constructor(size) {
    this.parent = [];
    this.rank = [];

    this._size = size;
    for (let i = 0; i < size; i++) {
      this.parent.push(i);
      this.rank[i] = 1;
    }
  }

  find(p) {
    if (p >= 0 && p <= this._size) {
      while (p !== this.parent[p]) {
        p = this.parent[p];
      }
    }
    return p;
  }

  isConnected(p, q) {
    return this.find(p) === this.find(q);
  }

  unionElements(p, q) {
    const pRoot = this.find(p);
    const qRoot = this.find(q);

    if (pRoot === qRoot) {
      return null;
    }

    if (this.rank[pRoot] < this.rank[qRoot]) {
      this.parent[pRoot] = qRoot;
    } else if (this.rank[qRoot] < this.rank[pRoot]) {
      this.parent[qRoot] = pRoot;
    } else {
      this.parent[pRoot] = qRoot;
      this.rank[qRoot] += 1;
    }
  }
}

// best 路径压缩
export class UnionFind5 {
  constructor(size) {
    this.parent = [];
    this.rank = [];

    this._size = size;
    for (let i = 0; i < size; i++) {
      this.parent.push(i);
      this.rank[i] = 1;
    }
  }

  find(p) {
    if (p >= 0 && p <= this._size) {
      while (p !== this.parent[p]) {
        this.parent[p] = this.parent[this.parent[p]];
        p = this.parent[p];
      }
    }
    return p;
  }

  isConnected(p, q) {
    return this.find(p) === this.find(q);
  }

  unionElements(p, q) {
    const pRoot = this.find(p);
    const qRoot = this.find(q);

    if (pRoot === qRoot) {
      return null;
    }

    if (this.rank[pRoot] < this.rank[qRoot]) {
      this.parent[pRoot] = qRoot;
    } else if (this.rank[qRoot] < this.rank[pRoot]) {
      this.parent[qRoot] = pRoot;
    } else {
      this.parent[pRoot] = qRoot;
      this.rank[qRoot] += 1;
    }
  }
}

// best 路径完全压缩，递归，但是由于递归的产生，所以时间不如 rank 优化
export class UnionFind6 {
  constructor(size) {
    this.parent = [];
    this.rank = [];

    this._size = size;
    for (let i = 0; i < size; i++) {
      this.parent.push(i);
      this.rank[i] = 1;
    }
  }

  find(p) {
    if (p >= 0 && p <= this._size) {
      if (p !== this.parent[p]) {
        this.parent[p] = this.find(this.parent[p]);
      }
      return this.parent[p];
    }
  }

  isConnected(p, q) {
    return this.find(p) === this.find(q);
  }

  unionElements(p, q) {
    const pRoot = this.find(p);
    const qRoot = this.find(q);

    if (pRoot === qRoot) {
      return null;
    }

    if (this.rank[pRoot] < this.rank[qRoot]) {
      this.parent[pRoot] = qRoot;
    } else if (this.rank[qRoot] < this.rank[pRoot]) {
      this.parent[qRoot] = pRoot;
    } else {
      this.parent[pRoot] = qRoot;
      this.rank[qRoot] += 1;
    }
  }
}