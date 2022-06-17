var minCostClimbingStairs = function(cost) {
    const n = cost.length;
    let pre = 0,
        curr = 0;
    for (let i = 2; i <= n; i++) {
        let next = Math.min(curr + cost[i - 1], pre + cost[i - 2]);
        pre = curr;
        curr = next;
    }
    return curr;
};