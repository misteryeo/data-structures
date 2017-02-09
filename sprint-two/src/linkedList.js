var LinkedList = function() {
  var list = {};
  list.head = null; //
  list.tail = null;
  // _.extend(list, NodeFunction); //is NodeFunction getting extended 
  

  list.addToTail = function(value) {
    var tailNode = NodeFunction(value);
    if (!list.head && !list.tail) {

      list.head = tailNode;
      list.tail = tailNode;

    } else {
      list.tail.next = tailNode; 
      list.tail = tailNode;
    }
  };

  list.removeHead = function() { 
    var delHead = list.head;
    list.head = list.head.next;
    return delHead.value;
  };

  list.contains = function(target) {
    
    var search = function(node) {
      if (node === target) {
        return true;
      }
    };
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
