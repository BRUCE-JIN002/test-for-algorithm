//有问题
var updateMatrix = function(mat) {
    const m = mat.length;
    const n = mat[0].length;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            let count = 0;
            if (mat[i][j] !== 0) {
                bfs(i, j, mat, count);
            }
        }
    }
};

const bfs = (i, j, mat, count) => {
    const m = mat.length;
    const n = mat[0].length;
    if (i < 0 || i >= m || j < 0 || j >= n) {
        return;
    }
    if (mat[i][j] === 0) {
        count++;
        mat[i][j] = count;
        return;
    }

    bfs(i - 1, j);
    bfs(i + 1, j);
    bfs(i, j - 1);
    bfs(i, j + 1);
};