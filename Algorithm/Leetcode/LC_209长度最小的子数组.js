var minSubArrayLen = function (target, nums) {
  let i = 0;
  let j = nums.length - 1;

  while (i <= j) {
    if (rangSum(nums, i, j) > target) {
    }
    return 0;
  }
  return 0;
};

function rangSum(nums, start, end) {
  let sum = 0;
  for (let i = start; i < end; i++) {
    sum += nums[i];
  }
  return sum;
}
const nums = [12, 28, 83, 4, 25, 26, 25, 2, 25, 25, 25, 12];

console.log(minSubArrayLen(213, nums));
