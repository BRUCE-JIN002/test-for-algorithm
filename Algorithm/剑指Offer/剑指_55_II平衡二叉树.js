var isBalanced = function(root) {
    if (!root) return true;
    let left = depth(root.left);
    let right = depth(root.right);
    return (
        Math.abs(left - right) <= 1 &&
        isBalanced(root.left) &&
        isBalanced(root.right)
    );
};

//树的深度
var depth = (root) => {
    if (!root) {
        return null;
    }
    return Math.max(depth(root.left), depth(root.right)) + 1;
};