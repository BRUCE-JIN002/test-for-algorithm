var findTilt = function(root) {
    let ans = 0;

    const dfs = (root) => {
        if (!root) {
            return 0;
        }
        let left = dfs(root.left);
        let right = dfs(root.right);
        ans += Math.abs(left - right);
        return left + right + root.val; //返回当前结点的左右子树的结点和
    };

    dfs(root);
    return ans;
};