var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit); // this is the storage array we pushing buckets into
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit); // gives back index for where it will go
  // Check if storage bucket is undefined
  // if (this._storage[index] === undefined) {
  // // If so, establish a storage bucket
  //   this._storage[index] = [];
  // }
  // Otherwise, push the string value pair into storage bucket
  this._storage.set(index, [k, v]);
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // for (var i = 0; i < this._storage[index]; i++) {
  //   if (this._storage[index][i][0] === k) {
  //     console.log('hello');
  //     return this._storage[index][i][1];
  //   }
  // }
  
  var bucket = this._storage.get(index);
  
  
  bucket.each(function(item) {
    return item[1];
  });


};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


