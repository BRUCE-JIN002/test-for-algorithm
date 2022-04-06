var numTrees = (n) => {
    let ans = new Array(n + 1).fill(0);
    ans[0] = 1,
        ans[1] = 1;
    for (let i = 2; i <= n; i += 1) {
        for (let j = 1; j <= i; j++) {
            ans[i] += ans[j - 1] * ans[i - j];
        }
    }
    return ans[n];
}