var postorder = function(root) {
    let ans = [];
    const dfs = (root) => {
        if (!root) {
            return;
        }
        children = root.children;
        for (const child of children) {
            dfs(child);
        }
        ans.push(root.val);
    };
    dfs(root);
    return ans;
};