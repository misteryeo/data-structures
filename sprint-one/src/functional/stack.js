var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0; 
  var popcounter = 0;
  var pushcounter = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    storage[size] = value; 
    pushcounter++; 
    size++;
  };

  someInstance.pop = function() {
    popcounter++;
    size--;
    var value = storage[size]; 
    delete storage[size];
    return value; 
  };

  someInstance.size = function() {
    if (popcounter > pushcounter) {
      return 0; 
    } else {
      return size;
    }
  };

  return someInstance;
};
