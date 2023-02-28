var isBalanced = function(root) {
    const getDepth = function(node) {
        if (node === null) {
            return 0;
        }

        let leftHeight = getDepth(node.left);
        if (leftHeight === -1) {
            return -1;
        }

        let rightHeight = getDepth(node.right);
        if (rightHeight === -1) {
            return -1;
        }

        if (Math.abs(leftHeight - rightHeight) > 1) {
            return -1;
        } else {
            return Math.max(leftHeight, rightHeight) + 1;
        }
    };
    return getDepth(root) === -1 ? false : true;
};