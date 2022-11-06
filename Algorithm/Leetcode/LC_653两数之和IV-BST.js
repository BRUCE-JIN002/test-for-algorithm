var findTarget = function(root, k) {
    const set = new Set();
    const helper = (root, val) => {
        if (!root) {
            return false;
        }
        if (set.has(val - root.val)) {
            return true;
        }
        set.add(root.val);
        return helper(root.left, val) || helper(root.right, val);
    };
    return helper(root, k);
};

var findTarget = (root, k) => {
    const set = new Set();
    let queue = [];
    queue.push(root);
    while (queue.length) {
        const top = queue.shift();
        if (set.has(k - top.val)) {
            return true;
        }
        if (top.left) {
            set.add(top.left);
        }
        if (top.right) {
            set.add(top.right);
        }
    }
    return false;
};