var maxDepth = function(root) {
    const depth = (root) => {
        if (!root) {
            return null;
        }
        return Math.max(depth(root.left), depth(root.right)) + 1;
    };
    return depth(root);
};