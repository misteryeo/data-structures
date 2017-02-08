var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;
  var addCount = 0; 
  var deleteCount = 0;

  someInstance.enqueue = function(value) {
    storage[addCount] = value;
    size++;
    addCount++;
  };

  someInstance.dequeue = function() {
    if (size > 0) {
      size--;
    }

    var value = storage[deleteCount];
    delete storage[deleteCount];
    deleteCount++;
    return value;
  };

  someInstance.size = function() {
    return size;
  };

  return someInstance;
};

