var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {};
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  //assigning item to storage object
  this._storage[item] = item; 
};

setPrototype.contains = function(item) {
  // //iterate thru the set object 
  for (var key in this._storage) {
    //see if item matches the an item inside storage obj we're looking for 
    if (this._storage[key] === item) {
      //if so return true
      return true;
    }
  }
  //return false 
  return false;
};

setPrototype.remove = function(item) {
  //establish a var so that we can return it back when we call this method
  var removedItem = null;
  
  //iterate thru the set obj
  for (var key in this._storage) {
    //see if item matches an item inside storage obj we're looking for
    if (this._storage[key] === item) {
      //remove item from set obj
      delete this._storage[key]; 
    }
  }
  //setting the remove to equal the item we are removing
  removedItem = item; 
  //return that removed var
  return removedItem; 
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
