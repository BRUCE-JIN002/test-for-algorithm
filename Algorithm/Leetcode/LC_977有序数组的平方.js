var sortedSquares = function (nums) {
  let left = 0;
  let right = nums.length - 1;
  const arr = new Array(nums.length);
  let index = nums.length - 1;

  while (left <= right) {
    let valueLeft = nums[left] * nums[left];
    let valueRight = nums[right] * nums[right];
    if (valueLeft > valueRight) {
      arr[index] = valueLeft;
      left++;
    } else {
      arr[index] = valueRight;
      right--;
    }
    index--;
  }
  return arr;
};

const a = sortedSquares([-4, -1, 0, 3, 10]);

console.log(a);
