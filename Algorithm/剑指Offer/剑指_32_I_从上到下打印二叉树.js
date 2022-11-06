var levelOrder = function(root) {
    let res = []; //结果数组
    if (!root) return res;
    let queue = [];
    queue.push(root);
    while (queue.length) {
        let node = queue.shift();
        res.push(node.val);

        if (node.left) {
            queue.push(node.left);
        }
        if (node.right) {
            queue.push(node.right);
        }
    }
    return res;
};