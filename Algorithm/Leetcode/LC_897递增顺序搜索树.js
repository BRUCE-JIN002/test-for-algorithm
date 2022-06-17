var increasingBST = function(root) {
    const res = [];
    inorder(root, res);

    const dummyNode = new TreeNode(-1);
    let currNode = dummyNode;
    for (const value of res) {
        currNode.right = new TreeNode(value);
        currNode = currNode.right;
    }
    return dummyNode.right;
};

const inorder = (node, res) => {
    if (!node) {
        return;
    }
    inorder(node.left, res);
    res.push(node.val);
    inorder(node.right, res);
};

var increasingBST = function(root) {
    const dummyNode = new TreeNode(-1);
    let resNode = dummyNode;
    const inorder = (node) => {
        if (!node) {
            return;
        }
        inorder(node.left);
        resNode.right = node;
        node.left = null;
        resNode = node;
        inorder(node.right);
    };
    inorder(root);
    return dummyNode.right;
};