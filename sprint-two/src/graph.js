

// Instantiate a new graph
var Graph = function() {
// Establish an empty array to store new nodes
  this.storage = [];
// Establish a value for the node
  this.value = null; // Check why we need to use .value?
  this.edge = [];
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  var newNode = new Graph();  //need to check what newGraph() pushes
  newNode.value = node;
// Push new nodes into storage
  this.storage.push(newNode.value);
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return _.contains(this.storage, node);
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  //declare variable removeNode 
  var removedNode = null;
  //iterate through storage
  for (var i = 0; i < this.storage.length; i++) {
    //see if this.storage[i].value = node
    if (this.storage[i] === node) {
      // Remove node with splice method
      removeNode = this.storage.splice(i, 1); 
    }
  }
  return removedNode;
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  // Iterate through the edge array for each nested array
  for (var i = 0; i < this.edge.length; i++) {
    // Check if the nested array indices match the arguments passed in
    if ((this.edge[i][0] === fromNode && this.edge[i][1] === toNode) ||
      (this.edge[i][1] === fromNode && this.edge[i][0] === toNode)) {
      return true; 
    // If so, return true
    }
  }
  // Return false
  return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.edge.push([fromNode, toNode]);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  var removedEdge = null;
  // Iterate through the edge array for each nested array
  for (var i = 0; i < this.edge.length; i++) {
    // Check if the nested array indices match the arguments passed in
    if ((this.edge[i][0] === fromNode && this.edge[i][1] === toNode) ||
      (this.edge[i][1] === fromNode && this.edge[i][0] === toNode)) {
      removedEdge = this.edge.splice(i); 
    }
  }
  return removedEdge;
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


