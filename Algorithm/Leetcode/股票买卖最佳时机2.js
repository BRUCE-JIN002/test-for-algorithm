var maxProfit = function(prices) {
    let total = 0,
        index = 0,
        len = prices.length;
    if (prices == null && len < 2) {
        return 0;
    }
    while (index < len) {
        //找到一个价格上涨的最低点
        while (index < len - 1 && prices[index + 1] < prices[index]) {
            index++;
        }
        //记录最低点的价格
        let min = prices[index];
        //找到连续上涨的最高点
        while (index < len - 1 && prices[index + 1] > prices[index]) {
            index++;
        }
        //记录最高点的价格
        let max = prices[index];
        //累加每个上涨区间的最低价和最高价的差值即为所求
        total += max - min;
    }
    return total;
};