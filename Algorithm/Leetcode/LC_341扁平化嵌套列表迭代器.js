var NestedIterator = function (nestedList) {
  this.list = [];
  this.flatArray(nestedList);
};

NestedIterator.prototype.flatArray = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].isInteger()) {
      this.list.push(arr[i].getInteger());
    } else {
      this.flatArray(arr[i].getList());
    }
  }
};

NestedIterator.prototype.hasNext = function () {
  return this.list.length > 0;
};

NestedIterator.prototype.next = function () {
  return this.list.shift();
};
