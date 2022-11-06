function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

var mirrorTree = function(root) {
    if (!root) return null;
    let temp = new TreeNode();
    temp = root.left;
    root.left = root.right;
    root.right = temp;
    mirrorTree(root.left);
    mirrorTree(root.right);
    return root;
};