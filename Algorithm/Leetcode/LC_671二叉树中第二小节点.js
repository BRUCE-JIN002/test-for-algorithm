var findSecondMinimumValue = function(root) {
    let mmin = Number.MAX_VALUE;
    let set = new Set();

    const helper = (root) => {
        if (!root) {
            return;
        }
        if (root.val < mmin) {
            mmin = root.val;
        }
        set.add(root.val);
        helper(root.left);
        helper(root.right);
    };
    helper(root);
    set.delete(mmin);
    if (set.size === 0) return -1;
    let second = Infinity;
    for (const el of set) {
        second = Math.min(el, second);
    }
    return second;
};