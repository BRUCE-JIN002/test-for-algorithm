var movingCount = function(m, n, k) {
    const mark = new Array(m).fill(0).map(() => new Array(m).fill(0));
    let count = 0;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (toNumber(i) + toNumber(j) > k) {
                mark[i][j] = 1;
            }
        }
    }
    dfs;
    return m * n - count;
};

const dfs = (matrix, i, j) => {};

const toNumber = (n) => {
    let res = 0;
    while (n) {
        res += n % 10;
        n = Math.floor(n / 10);
    }
    return res;
};

const isArea = (i, j) => {
    return 0 < i && i < m && 0 < j && j < n;
};

console.log(movingCount(16, 8, 4));