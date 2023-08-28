let nums = [1, 2, 1, 2, 3, 4, 5, 4, 3, 6];

var singleNumbers = function (nums) {
  let res = nums[0];
  for (let i = 1; i < nums.length; i++) {
    res ^= nums[i];
  }
  let div = 1;
  //在异或结果中找到最低位为1的位
  while ((res & div) === 0) div <<= 1;

  let [a, b] = [0, 0];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] & div) {
      a ^= nums[i];
    } else {
      b ^= nums[i];
    }
  }
  return [a, b];
};

console.log(singleNumbers(nums));
