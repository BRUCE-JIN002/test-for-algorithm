var searchBST = function(root, val) {
    const dfs = (root) => {
        if (!root) {
            return;
        }
        if (root.val === val) {
            return root;
        }
        return dfs((root = val < root.val ? root.left : root.right));
    };
    const target = dfs(root);
    return target ? target : null;
};

//************************ */
var searchBST = function(root, val) {
    while (root) {
        if (root.val === val) {
            return root;
        }
        root = val < root.val ? root.left : root.right;
    }
    return null;
};