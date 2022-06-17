var preorder = function(root) {
    let ans = [];
    const dfs = (root) => {
        if (!root) {
            return;
        }
        ans.push(root.val);
        children = root.children;
        for (const child of children) {
            dfs(child);
        }
    };
    dfs(root);
    return ans;
};