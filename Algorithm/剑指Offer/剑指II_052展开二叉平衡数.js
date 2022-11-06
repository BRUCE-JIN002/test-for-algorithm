var increasingBST = function(root) {
    const head = new TreeNode(-1);
    let tempNode = head;
    const inorder = (node) => {
        if (!node) {
            return;
        }
        inorder(node.left);

        // 在中序遍历的过程中修改节点指向
        tempNode.right = node;
        node.left = null;
        tempNode = node;

        inorder(node.right);
    };
    inorder(root);
    return head.right;
};