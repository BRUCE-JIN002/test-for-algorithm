var canJump = function (nums) {
  let cover = 0;
  for (let i = 0; i <= cover; i++) {
    cover = Math.max(cover, i + nums[i]);
    if (cover >= nums.length - 1) {
      return true;
    }
  }
  return false;
};

const canJump = (nums) => {
  let dis = 0;
  for (let i = 0; i < nums.length; i++) {
    if (dis < i) return false;
    dis = Math.max(dis, i + nums[i]);
  }
  return true;
};
