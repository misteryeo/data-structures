var BinarySearchTree = function(value) {

  var binaryTree = Object.create(binaryTreeMethod);
  binaryTree.value = value;
  binaryTree.left = null;
  binaryTree.right = null;
  return binaryTree;
  };

var binaryTreeMethod = {};

binaryTreeMethod.insert = function(value) {
  var tree = BinarySearchTree(value)
  if (value < this.value) {
    if (this.left === null) {
      this.left = tree;
    } else {
      this.left.insert(value);
    }
  } else if (value > this.value) {
    if (this.right === null) {
      this.right = tree;
    } else {
      this.right.insert(value);
    }
  } 
};

binaryTreeMethod.contains = function(value) {
  var tree = BinarySearchTree(value)
    if (value === this.value) {
      return true;
  } else if (value < this.value) {
      return !!(this.left && this.left.contains(value));
  } else if (value > this.value) {
      return !!(this.right && this.right.contains(value));
  }
};

binaryTreeMethod.depthFirstLog = function(callBack) {
  callBack(this.value);
  if (this.left) {
    this.left.depthFirstLog(callBack);
  }
  if (this.right) {
    this.right.depthFirstLog(callBack);
  }
};