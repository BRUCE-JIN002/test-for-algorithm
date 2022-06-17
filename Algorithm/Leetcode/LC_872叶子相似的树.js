var leafSimilar = function(root1, root2) {
    const seq1 = [];
    if (root1) {
        dfs(root1, seq1);
    }
    const seq2 = [];
    if (root2) {
        dfs(root2, seq2);
    }
    return seq1.toString() === seq2.toString();
};

const dfs = (root, seq) => {
    if (!root.left && !root.right) {
        seq.push(root.val);
    } else {
        if (root.left) {
            dfs(root.left, seq);
        }
        if (root.right) {
            dfs(root.right, seq);
        }
    }
};