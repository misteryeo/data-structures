var LinkedList = function() {
  var list = {};
  list.head = null; //
  list.tail = null;
  

  list.addToTail = function(value) {
    var tailNode = NodeFunction(value); // Store the added node value in tailNode
    if (!list.head && !list.tail) { // Check if both head and tail exists in list
      list.head = tailNode; // If they don't exist, set head to passed in node value
      list.tail = tailNode; // Also set tail to passed in node value ie. head and tail are the same
    } else {  // If head or tail exist
      list.tail.next = tailNode; // Set the next tail to be new node value
      list.tail = tailNode; // Set the tail to new node value
    }
  };

  list.removeHead = function() { 
    var delHead = list.head; // Store the head in delHead
    list.head = list.head.next; // Set the head to the next head
    return delHead.value; // Return the value of the deleted head ??
  };

  list.contains = function(target) {
    for (var node = list.head; node !== null; node = node.next) { // Iterate through the list starting at the head
      if (node.value === target) { // Check if the value of node matches target
        return true; // If so, return true
      } 
      // Not sure why putting return false here wouldn't work
    }
    return false;
  };

  return list;
};

var NodeFunction = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
