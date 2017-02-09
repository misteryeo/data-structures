var stackMethods = {
  push: function (value) {
    storage[size] = value;
    size++;
  },
  pop: function () {
    if (size > 0) {
      size--;
    }
    var value = storage[size];
    delete storage[size];
    return value;
  },
  size: function () {
    return size;
  }
};

var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = {}; 
  var storage = {}; 
  var size = 0;

  instance.push = stackMethods.push;

  instance.pop = stackMethods.pop;

  instance.size = stackMethods.size;

  return instance;
};




