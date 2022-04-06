/**
 * 给定不同面额的硬币 coins 和一个总金额 amount。
 * 编写一个函数来计算可以凑成总金额所需的最少的硬币个数。
 * 如果没有任何一种硬币组合能组成总金额，返回 -1
 * 
 示例1：
  输入: coins = [1, 2, 5], amount = 11
  输出: 3
  解释: 11 = 5 + 5 + 1

 示例2：
  输入: coins = [2], amount = 3
  输出: -1 
 */

const coinsChange = function(coins, amount) {
    // 用于保存每个目标总额对应的最小硬币个数
    const f = [];
    f[0] = 0;
    // 遍历 [1, amount] 这个区间的硬币总额
    for (let i = 1; i <= amount; i++) {
        // 求的是最小值，因此我们预设为无穷大，确保它一定会被更小的数更新
        f[i] = Infinity;
        for (let j = 0; j < coins.length; j++) {
            if (i - coins[j] >= 0) {
                f[i] = Math.min(f[i], f[i - coins[j]] + 1);
            }
        }
    }
    if (f[amount] === Infinity) {
        return -1;
    }
    return f[amount];
};

console.log(coinsChange([1, 2, 5], 11));