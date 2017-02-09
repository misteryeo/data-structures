var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = Object.create(queueMethods);
  instance.storage = {};
  instance.count = 0;
  instance.addCount = 0;
  instance.deleteCount = 0;
  return instance;
};

var queueMethods = {};

queueMethods.enqueue = function (value) {
  this.storage[this.addCount] = value;
  this.count++;
  this.addCount++;
};

queueMethods.dequeue = function () {
  var value = this.storage[this.deleteCount];
  this.deleteCount++;
  if (this.count > 0) {
    this.count--;
  }
  return value;
};

queueMethods.size = function () {
  return this.count;
};
