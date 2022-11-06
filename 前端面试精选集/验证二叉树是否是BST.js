/**
 * BST 的定义如下：
  1.若任意节点的左子树不空，则左子树上所有节点的值均小于它的根节点的值；
  2.若任意节点的右子树不空，则右子树上所有节点的值均大于或等于它的根节点的值；
  3.任意节点的左、右子树也分别为二叉查找树。
 */

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

const isValidBST = (root) => {
    if (!root) {
        return true;
    }

    function helper(root, min, max) {
        if (!root) {
            return true;
        }
        if (
            (min !== null && root.val <= min) ||
            (max !== null && root.val >= max)
        ) {
            return false;
        }
        return (
            helper(root.left, min, root.val) && helper(root.right, root.val, max)
        );
    }
    return helper(root, null, null);
};

const f = helper();
console.log(f(root));

//使用栈
var isValidBST1 = function(root) {
    let stack = [];
    let inorder = -Infinity;

    while (stack.length || root !== null) {
        while (root !== null) {
            stack.push(root);
            root = root.left;
        }
        root = stack.pop();
        if (root.val <= inorder) {
            return false;
        }
        inorder = root.val;
        root = root.right;
    }
    return true;
};