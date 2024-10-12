var containsDuplicate = function (nums) {
  const map = {};
  for (let num of nums) {
    if (num in map) {
      return true;
    } else {
      map[num] = true;
    }
  }
  return false;
};
