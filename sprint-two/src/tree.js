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
  
  // Iterate through tree object
  if (this.value === target) {
    return true;
  }
  // Iterate through children array
  for (var i = 0; i < this.children.length; i++) {
  // Check if target equals value in children
    if (this.children[i] === target) {
  // If true, return true
      return true;
    }
  }
  // Return false for all other cases
  return false;

};



/*
 * Complexity: What is the time complexity of the above functions?
 */
