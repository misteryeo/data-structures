var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = {}; 
  instance.count = 0;
  instance.storage = {}; 
  _.extend(instance, stackMethods);
  return instance;
};

var stackMethods = {};

stackMethods.push = function (value) {
  this.count++;
  this.storage[this.count] = value;
};

stackMethods.pop = function () {

  var value = this.storage[this.count];
  delete this.storage[this.count];
  if (this.count > 0) {
    this.count--;
  }

  return value;
};

stackMethods.size = function () {
  return this.count;
};
