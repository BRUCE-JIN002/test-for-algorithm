var topKFrequent = function (nums, k) {
  const map = {};
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] in map) {
      map[nums[i]] = map[nums[i]] + 1;
    } else {
      map[nums[i]] = 1;
    }
  }
  return Object.entries(map)
    .sort((a, b) => b[1] - a[1])
    .slice(0, k)
    .map((v) => Number(v[0]));
};

const nums = [1, 1, 1, 2, 2, 3];

topKFrequent(nums, 2);
