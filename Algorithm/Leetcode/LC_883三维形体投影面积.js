var projectionArea = function(grid) {
    const n = grid.length;
    const rowMax = new Array(n).fill(0);
    const colMax = new Array(n).fill(0);
    let zeroCnt = 0;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 0) {
                zeroCnt++;
            }
            rowMax[i] = Math.max(rowMax[i], grid[i][j]);
            colMax[j] = Math.max(colMax[j], grid[i][j]);
        }
    }
    let ans = n * n - zeroCnt;
    for (let i = 0; i < n; i++) {
        ans += rowMax[i] + colMax[i];
    }
    console.log(ans);
    return ans;
};
projectionArea([
    [1, 2],
    [3, 4],
]);