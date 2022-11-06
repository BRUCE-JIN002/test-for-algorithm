var maxDepth = function(root) {
    if (!root) {
        return 0;
    }
    let maxChildDepth = 0;
    const children = root.children;
    for (const child of children) {
        const childDepth = maxDepth(child); //递归
        maxChildDepth = Math.max(maxChildDepth, childDepth); //更新
    }
    return maxChildDepth + 1;
};