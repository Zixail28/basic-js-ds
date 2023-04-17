const { NotImplementedError } = require("../extensions/index.js");

// const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.rootVar = null;
  }

  root() {
    return this.rootVar;
  }

  add(data) {
    if (this.rootVar === null) {
      this.rootVar = new Node(data);
      return;
    }
    const recursionAdd = (node) => {
      if (data < node.data) {
        if (node.left !== null) {
          recursionAdd(node.left);
        } else {
          node.left = new Node(data);
        }
      }
      if (data > node.data) {
        if (node.right !== null) {
          recursionAdd(node.right);
        } else {
          node.right = new Node(data);
        }
      }
    };
    recursionAdd(this.rootVar);
  }

  has(data) {
    if (this.rootVar === null) {
      return false;
    }
    const recursionHas = (node) => {
      if (data === node.data) {
        return true;
      }
      if (data < node.data) {
        if (node.left !== null) {
          return recursionHas(node.left);
        } else {
          return false;
        }
      }
      if (data > node.data) {
        if (node.right !== null) {
          return recursionHas(node.right);
        } else {
          return false;
        }
      }
    };
    return recursionHas(this.rootVar);
  }

  find(data) {
    if (this.rootVar === null) {
      return null;
    }
    const recursionHas = (node) => {
      if (data === node.data) {
        return node;
      }
      if (data < node.data) {
        if (node.left !== null) {
          return recursionHas(node.left);
        } else {
          return null;
        }
      }
      if (data > node.data) {
        if (node.right !== null) {
          return recursionHas(node.right);
        } else {
          return null;
        }
      }
    };
    return recursionHas(this.rootVar);
  }

  remove(data) {
    const removeNode = (node, data) => {
      if (node === null) {
        return null;
      }
      if (data === node.data) {
        // случай 1: удаляемый узел не имеет потомков
        if (node.left === null && node.right === null) {
          return null;
        }
        // случай 2: удаляемый узел имеет только одного потомка
        if (node.left === null) {
          return node.right;
        }
        if (node.right === null) {
          return node.left;
        }
        // случай 3: удаляемый узел имеет двух потомков
        let tempNode = node.right;
        while (tempNode.left !== null) {
          tempNode = tempNode.left;
        }
        node.data = tempNode.data;
        node.right = removeNode(node.right, tempNode.data);
        return node;
      } else if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else {
        node.right = removeNode(node.right, data);
        return node;
      }
    };
    this.rootVar = removeNode(this.rootVar, data);
  }

    min() {
      if (this.rootVar === null) {
        return null;
      }
      const recursionMin = (node) => {
        if (node.left === null) {
          return node.data;
        } else {
            return recursionMin(node.left);
        }
      };
      return recursionMin(this.rootVar);
    }
  
    max() {
      if (this.rootVar === null) {
        return null;
      }
      const recursionMax = (node) => {
        if (node.right === null) {
          return node.data;
        } else {
            return recursionMax(node.right);
        }
      };
      return recursionMax(this.rootVar);
    }
}

module.exports = {
  BinarySearchTree,
};
