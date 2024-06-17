function quickSort(nums) {
  if (nums.length <= 1) return nums;
  const pivot = nums[0];

  let smaller = [];
  let equal = [];
  let lager = [];

  for (let num of nums) {
    if (num < pivot) {
      smaller.push(num);
    } else if (num > pivot) {
      lager.push(num);
    } else {
      equal.push(num);
    }
  }

  smaller = quickSort([...smaller]);
  lager = quickSort([...lager]);

  return [...smaller, ...equal, ...lager];
}

const arr = [2, 31, 12, 4, 9, 0, 5, 43];
console.log(quickSort(arr));
