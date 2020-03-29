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

}
