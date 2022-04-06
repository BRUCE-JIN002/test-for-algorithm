/**
 * 3种遍历方法的区别：

    前序遍历：根节点 → 左侧子节点 → 右侧子节点

    中序遍历：左侧子节点 → 根节点 → 右侧子节点

    后序遍历：左侧子节点 → 右侧子节点 → 根节点
 */

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

//前序遍历
function preTracersal(node) {
    if (node) {
        console.log(node.val);
        preTracersal(node.left);
        preTracersal(node.right);
    }
}

//中序遍历
function preTracersal(node) {
    if (node) {
        preTracersal(node.left);
        console.log(node.val);
        preTracersal(node.right);
    }
}

//后序遍历
function preTracersal(node) {
    if (node) {
        preTracersal(node.left);
        preTracersal(node.right);
        console.log(node.val);
    }
}