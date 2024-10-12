class Solution {
  nums: Array<number>;

  constructor(nums: number[]) {
    this.nums = nums;
  }

  reset(): number[] {
    return this.nums;
  }

  shuffle(): number[] {
    let arr = [...this.nums];
    let n = arr.length;
    for (let i = 0; i < n; i++) {
      const rand = randOne(i, n - 1);
      [arr[i], arr[rand]] = [arr[rand], arr[i]];
    }
    return arr;
  }
}

// 获取闭区间 [n, m] 内的一个随机整数
const randOne = (n, m) => {
  return Math.floor(Math.random() * (m - n + 1)) + n;
};
