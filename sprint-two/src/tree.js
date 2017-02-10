var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children.push(Tree(value)); // Push new value into children array
};

treeMethods.contains = function(target) {
// Set a variable for true or false
  var check = false;

  // Establish a function to search tree
  var searchTree = function(tree) {
  // Check if value in tree matches target
    if (tree.value === target) {
      check = true;
    }

  // Check if children array exists
    if (tree.children) {
  // Iterate through children array
      for (var i = 0; i < tree.children.length; i++) {
  // Recursively apply searchTree for each child
        searchTree(tree.children[i]);
      }
    }
  };
  // Apply recursion to newTree
  searchTree(this);
  // Return check for all other cases
  return check;

};



/*
 * Complexity: What is the time complexity of the above functions?
 */
