var diameterOfBinaryTree = function(root) {
    let ans = 1;

    function depth(rootNode) {
        if (!rootNode) return 0;

        //递归获取左右子树的深度
        let L = depth(rootNode.left);
        let R = depth(rootNode.right);

        ans = Math.max(ans, L + R + 1);

        return Math.max(L, R) + 1;
    }
    depth(root); //调用depth函数
    return ans - 1;
}