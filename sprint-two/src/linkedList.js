var LinkedList = function() {
  var list = {};
  list.head = null; //
  list.tail = null;
  // _.extend(list, NodeFunction); //is NodeFunction getting extended 
  

  list.addToTail = function(value) {
    var tailNode = NodeFunction(value);
    if (list.head == null && list.tail == null) {
      list.head = tailNode;
      list.tail = tailNode;
    } else {
      list.tail = tailNode.next; 
    }

    // list.tail = {}; //list.tail was null. making {} 
    // list.tail.value = value; //setting tail.value = value
  };

  list.removeHead = function() { 
    // var delHead = list.head;
    // list.head = this.next;
    // delete list.head;
  };

  list.contains = function(target) {
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
