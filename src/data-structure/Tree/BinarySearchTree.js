import { Stack } from '../Stack/Stack';

class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

export class BinarySearchTree {
  constructor() {
    this.root = null;
    this.left = null;
    this.right = null;
    this._size = 0;
  }

  get size() {
    return this._size;
  }

  isEmpty() {
    return this.size === 0;
  }

  add(e) {
    const __add = (node, e) => {
      if (node === null) {
        this._size++;
        return new TreeNode(e);
      }

      if (node.value > e) {
        node.left = __add(node.left, e);
      } else if (node.value < e) {
        node.right = __add(node.right, e);
      }

      return node;
    };

    if (this.root === null) {
      this.root = new TreeNode(e);
      this._size++;
    } else {
      __add(this.root, e);
    }
  }

  contains(e) {
    const __contains = (node, e) => {
      if (node === null) {
        return false;
      }

      if (node.value === e) {
        return true;
      } else if (node.value < e) {
        return __contains(node.right, e);
      } else {
        return __contains(node.left, e);
      }
    };
    return __contains(this.root, e);
  }

  // 先序遍历
  preOrder() {
    const result = [];
    const __preOrder = node => {
      if (node !== null) {
        result.push(node.value);
        __preOrder(node.left);
        __preOrder(node.right);
      }
    };

    __preOrder(this.root);
    return result;
  }

  // 中序遍历
  inOrder() {
    const result = [];
    const __inOrder = node => {
      if (node !== null) {
        __inOrder(node.left);
        result.push(node.value);
        __inOrder(node.right);
      }
    };

    __inOrder(this.root);
    return result;
  }

  // 后序遍历
  postOrder() {
    const result = [];
    const __postOrder = node => {
      if (node !== null) {
        __postOrder(node.left);
        __postOrder(node.right);
        result.push(node.value);
      }
    };

    __postOrder(this.root);
    return result;
  }

  // 使用栈完成先序遍历
  preOrderStack() {
    const stack = new Stack();
    stack.push(this.root);
    const result = [];
    while (!stack.isEmpty()) {
      const currentNode = stack.pop();
      result.push(currentNode.value);
      if (currentNode.right) {
        stack.push(currentNode.right);
      }
      if (currentNode.left) {
        stack.push(currentNode.left);
      }
    }
    return result;
  }

  // 树的最小值
  minimum() {
    if (this.isEmpty()) {
      return false;
    }

    const __minimum = node => {
      if (!node.left) {
        return node;
      }
      return __minimum(node.left);
    };
    return __minimum(this.root);
  }

  // 树的最大值
  maximum() {
    if (this.isEmpty()) {
      return false;
    }

    const __maximum = node => {
      if (!node.right) {
        return node;
      }
      return __maximum(node.right);
    };

    return __maximum(this.root);
  }

  // 删除最小值
  removeMinimum() {
    if (this.isEmpty()) {
      return false;
    }

    const __removeMinimum = node => {
      if (node.left === null) {
        const rightNode = node.right;
        node.right = null;
        this._size--;
        return rightNode;
      }
      node.left = __removeMinimum(node.left);
      return node;
    };
    const result = this.minimum();
    this.root = __removeMinimum(this.root);
    return result;
  }

  // 删除最大值
  removeMaximum() {
    if (this.isEmpty()) {
      return false;
    }

    const __removeMaximum = node => {
      if (node.right === null) {
        const leftNode = node.left;
        node.left = null;
        this._size--;
        return leftNode;
      }
      node.right = __removeMaximum(node.right);
      return node;
    };

    const result = this.maximum();
    this.root = __removeMaximum(this.root);
    return result;
  }

  // TODO
  // 删除任意元素
  remove(value) {
    const __remove = (node, value) => {
      if (node === null) {
        return null;
      }

      if (node.value > value) {
        console.log('>', node);
        node.right = __remove(node.right, value);
        return node;
      } else if (node.value < value) {
        console.log('<', node);
        node.left = __remove(node.left, value);
        return node;
      } else {
        console.log('=', node);
        // node.value === value;
        if (node.left === null) {
          const rightNode = node.right;
          node.right = null;
          this._size--;
          return rightNode;
        }

        if (node.right === null) {
          const leftNode = node.left;
          node.left = null;
          this._size--;
          return leftNode;
        }
        /*
        * 待删除节点左右子均不为空的情况
        * 找到比待删除节点大的最小节点，即待删除节点右子树的最小节点
        * 用这个节点顶替待删除节点的位置
        * */
        // 后继节点
        const successor = this.minimum(node.right);
        // 在 removeMinimum 中进行了 size 减操作
        successor.right = this.removeMinimum(node.right);
        successor.left = node.left;
        node.left = node.right = null;
        return successor;
      }

    };

    this.root = __remove(this.root, value);
    return true;
  }
}
