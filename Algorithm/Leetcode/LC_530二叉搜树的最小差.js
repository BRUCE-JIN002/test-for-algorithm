var getMinimumDifference = function(root) {
    let prev,
        min = Infinity;
    const dfs = (root) => {
        if (!root) {
            return;
        }
        dfs(root.left);
        if (Math.abs(root.val - prev) < min) {
            min = Math.abs(root.val - prev);
        }
        prev = root.val;
        dfs(root.right);
    };
    dfs(root);
    return min;
};