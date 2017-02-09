var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.count = 0;
  this.deleteCount = 0;
  this.addCount = 0;
  this.storage = {};
};

Queue.prototype.enqueue = function (value) {
  this.storage[this.addCount] = value;  
  this.count++;
  this.addCount++;
};

Queue.prototype.dequeue = function () {
  var value = this.storage[this.deleteCount]; 
  this.deleteCount++;
  if (this.count > 0) {
    this.count--;  
  }
  return value;
  
};

Queue.prototype.size = function () {
  return this.count;
};