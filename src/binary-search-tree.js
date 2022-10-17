const { NotImplementedError } = require('../extensions/index.js')

const { Node } = require('../extensions/list-tree.js')

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.treeRoot = null
  }

  root() {
    return this.treeRoot
  }

  add(data) {
    this.treeRoot = addWithin(this.treeRoot, data)

    function addWithin(cur, data) {
      if (!cur) return new Node(data)
      if (cur.data == data) return cur
      
      if (data < cur.data) {
        cur.left = addWithin(cur.left, data)
      } else {
        cur.right = addWithin(cur.right, data)
      }
      return cur
    }
  }

  has(data) {
    return searchWithin(this.treeRoot, data)

    function searchWithin(cur, data) {
      if (!cur) {
        return false
      }
      if (cur.data === data) {
        return true
      }
      return data < cur.data ?
        searchWithin(cur.left, data) :
        searchWithin(cur.right, data)
    }
  }

  find(data) {
    return searchWithin(this.treeRoot, data)

    function searchWithin(cur, data) {
      if (!cur) {
        return null
      }
      if (cur.data === data) {
        return cur
      }
      return data < cur.data ?
        searchWithin(cur.left, data) :
        searchWithin(cur.right, data)
    }
  }

  remove(data) {
    this.treeRoot = removeElement(this.treeRoot, data)

    function removeElement(cur, data) {
      if (!cur) return null

      if (data < cur.data) {
        cur.left = removeElement(cur.left, data)
        return cur
      } else if (cur.data < data) {
        cur.right = removeElement(cur.right, data)
        return cur
      } else {
        if (!cur.left && !cur.right) {
          return null
        }
        if (!cur.left) {
          cur = cur.right
          return cur
        }
        if (!cur.right) {
          cur = cur.left
          return cur
        }
        let minFromRight = cur.right
        while (minFromRight.left) {
          minFromRight = minFromRight.left
        }
        cur.data = minFromRight.data
        cur.right = removeElement(cur.right, minFromRight.data)
        return cur
      }
    }

  }

  min() {
    if (!this.treeRoot) return null
    let cur = this.treeRoot
    while (cur.left) {
      cur = cur.left
    }
    return cur.data
  }

  max() {
    if (!this.treeRoot) return null
    let cur = this.treeRoot
    while (cur.right) {
      cur = cur.right
    }
    return cur.data
  }
}

module.exports = {
  BinarySearchTree
};