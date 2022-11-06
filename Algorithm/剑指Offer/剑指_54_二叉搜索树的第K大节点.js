var kthLargest = function(root, k) {
    let res;

    const inorder = (root) => {
        if (!root) {
            return;
        }
        inorder(root.right);
        k--;
        if (k === 0) {
            return res = root.val;
        }
        inorder(root.left);
    }

    inorder(root);
    return res;
};