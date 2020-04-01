import { Queue } from '../Queue/Queue';

/*
* 二叉搜索树
* 每个节点的键值大于左孩子
* 每个节点的键值小于右孩子
* 以左右孩子为根的子树仍未二分搜索树
*
* 二叉搜索树不一定是一个完全二叉树
*
* 遍历
* 前序遍历: 先访问当前节点，再依次递归访问左右子树
* 中序遍历: 先递归访问左子树，再访问自身，最后递归访问右子树
* 后续遍历: 先递归访问左右子树，再访问自身节点
* */

class TreeNode {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

export class BinarySearchTree {
  constructor(size) {
    this.root = null;
    this._size = size;
    this._capacity = 0;
  }

  size() {
    return this._size;
  }

  capacity() {
    return this._capacity;
  }

  isEmpty() {
    return this._capacity === 0;
  }

  isFull() {
    return this.size() === this.capacity();
  }

  insert(key, value) {
    // 以 node 为根插入节点(key, value);
    const __insert = (node, key, value) => {
      if (node === null) {
        this._capacity++;
        return new TreeNode(key, value);
      }

      if (key === node.key) {
        node.value = value;
      } else if (key < node.key) {
        __insert(node.left, key, value);
      } else {
        __insert(node.right, key, value);
      }

      return node;
    };

    this.root = __insert(this.root, key, value);
  }

  contain(key) {
    const __contain = (node, key) => {
      if (node === null) {
        return false;
      }

      if (node.key === key) {
        return true;
      } else if (node.key < key) {
        __contain(node.left, key);
      } else {
        __contain(node.right, key);
      }
    };


    return __contain(this.root, key);
  }

  // 返回 value,
  search(key) {
    const __search = (node, key) => {
      if (node === null) {
        return null;
      }

      if (node.key === key) {
        return node.value;
      } else if (node.key < key) {
        return __search(node.left, key);
      } else {
        return __search(node.right, key);
      }
    };

    return __search(this.root, key);
  }

  // 前序遍历
  preOrder() {
    const __preOrder = node => {
      if (node !== null) {
        console.log(node.key);
        __preOrder(node.left);
        __preOrder(node.right);
      }
    };

    __preOrder(this.root);
  }

  // 中序遍历
  inOrder() {
    const __inOrder = node => {
      if (node !== null) {
        __inOrder(node.left);
        console.log(node.key);
        __inOrder(node.right);
      }
    };

    __inOrder(this.root);
  }

  // 后序遍历
  postOrder() {
    const __postOrder = node => {
      if (node !== null) {
        __postOrder(node.left);
        __postOrder(node.right);
        console.log(node.key);
      }
    };

    __postOrder(this.root);
  }

  // 层序遍历
  levelOrder() {
    const q = new Queue(this.size());

    q.push(this.root);

    while (!q.isEmpty()) {
      const node = q.front();

      q.dequeue();

      console.log(node.key);

      if (node.left) {
        q.push(node.left);
      }

      if (node.right) {
        q.push(node.right);
      }
    }

  }

  // 获取最小值
  minNode() {
    if (this.isEmpty()) {
      return null;
    }

    const __minNode = node => {
      if (node.left === null) {
        return node;
      }
      return __minNode(node.left);
    };

    const minNode = __minNode(this.root);
    return minNode.value;
  }

  // 获取最大值
  maxNode() {
    if (this.isEmpty()) {
      return null;
    }

    const __maxNode = node => {
      if (node.right === null) {
        return node;
      }
      return __maxNode(node.right);
    };

    const maxNode = __maxNode(this.root);
    return maxNode.value;
  }

  // 删除最小值节点
  removeMin() {
    if (this.isEmpty()) {
      return null;
    }

    const __removeMin = node => {
      if (node.left === null) {
        const rightNode = node.right;
        this._capacity--;
        return rightNode;
      }
      node.left = __removeMin(node.left);
      return node;
    };

    __removeMin(this.root);
  }

  // 删除最大值节点
  removeMax() {
    if (this.isEmpty()) {
      return null;
    }
    const __removeMax = node => {
      if (node.right === null) {
        const leftNode = node.left;
        this._capacity--;
        return leftNode;
      }
      node.right = __removeMax(node.right);
      return node;
    };

    __removeMax(this.root);
  }

  // 删除
  remove(key) {
    const __remove = (node, key) => {
      if (node === null) {
        return null;
      }
      if (key < node.key) {
        node.left = __remove(node.left, key);
      } else if (key < node.key) {
        node.right = __remove(node.right, key);
      } else {
        if (node.left === null) {
          const rightNode = node.right;
          this._capacity--;
          return rightNode;
        }
        if (node.right === null) {
          const leftNode = node.left;
          this._capacity--;
          return leftNode;
        }
        const successor = this.minNode(node.right);
        this._capacity++;
        successor.right = this.removeMin(node.right);
        successor.left = node.left;
        this._capacity--;
        return successor;
      }
    };

    this.root = __remove(this.root, key);
  }

  // 找距离 value 最近的小于 target 的值
  floor(value) {
  }

  // 找距离 value 最近的大于 target 的值
  ceil(value) {
  }

  // 找到一个元素的排名
  rank(node) {
  }

  // 找到排名为 n 的元素
  select(n) {
  }


}
