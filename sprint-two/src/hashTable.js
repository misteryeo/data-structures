var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit); // this is the storage array we pushing buckets into
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit); // gives back index for where it will go
  
  var tuple = [k, v];
  if (this._storage[index] === undefined) {
    var bucket = [];
  }
  bucket.push(tuple);

  // set method pushes in BUCKET at index
  this._storage.set(index, bucket);

  // loop thru bucket, Check if tuple at index exists
  // If so overwrite if k is the same 
  // else push in new tuple in bucket array
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  
  var bucket = this._storage.get(index);

  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
      return bucket[i][1];
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  var bucket = this._storage.get(index);
  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
      bucket.splice(i, 1);
    }
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


