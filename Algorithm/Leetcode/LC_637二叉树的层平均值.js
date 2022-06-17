var averageOfLevels = function(root) {
    let counts = [];
    let sums = [];
    dfs(root, 0, counts, sums);
    let average = [];
    let size = sums.length;
    for (let i = 0; i < size; i++) {
        average.push(sums[i] / counts[i]);
    }
    return average;
};

const dfs = (root, level, counts, sums) => {
    if (!root) {
        return;
    }
    if (level < sums.length) {
        sums[level] += root.val;
        counts[level] += 1;
    } else {
        sums.push(1.0 * root.val);
        counts.push(1);
    }
    dfs(root.left, level + 1, counts, sums);
    dfs(root.right, level + 1, counts, sums);
};