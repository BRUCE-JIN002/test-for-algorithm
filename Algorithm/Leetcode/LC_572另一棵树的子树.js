var isSubtree = function(root, subRoot) {
    if (root == null) return subRoot == null;
    var isSame = (p, q) => {
        if (!p || !q) return p === q;
        return (
            p.val === q.val && isSame(p.left, q.left) && isSame(p.right, q.right)
        );
    };
    if (isSame(root, subRoot)) return true;
    return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
};