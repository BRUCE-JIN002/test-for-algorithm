const backTrace = (list, temp, nums) => {
  if (temp.length === nums.length) {
    return list.push([...temp]);
  }
  for (let i = 0; i < nums.length; i++) {
    if (temp.includes(nums[i])) {
      continue;
    }
    temp.push(nums[i]);
    console.log("process:", temp);
    backTrace(list, temp, nums);
    temp.pop();
  }
};

var permute = function (nums) {
  const list = [];
  backTrace(list, [], nums);
  return list;
};

console.log(permute([1, 2, 3]));
