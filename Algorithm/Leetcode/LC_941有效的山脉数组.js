const validMountainArray = function (arr) {
  let maxIndex = 0;
  let res = true;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < arr[i + 1]) {
      continue;
    } else {
      maxIndex = i;
      if (i === arr.length - 1 || i === 0) {
        res = false;
      }
      break;
    }
  }
  for (let i = maxIndex; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      continue;
    } else {
      res = false;
      break;
    }
  }
  return res;
};

console.log(validMountainArray([0, 1, 2, 3, 3]));
console.log(validMountainArray([3, 2, 1, 0]));
console.log(validMountainArray([3, 5, 4, 2, 1]));
