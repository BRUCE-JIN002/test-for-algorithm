var levelOrder = function(root) {
    let res = [];
    if (!root) return res;
    let q = [];
    q.push(root);
    while (q.length !== 0) {
        let temp = [];
        let len = q.length;
        for (let i = 0; i < len; i++) {
            const node = q.shift(); //删除数组第一个元素并返回该值<==>队首元素
            temp.push(node.val);
            if (node.left) q.push(node.left);
            if (node.right) q.push(node.right);
        }
        res.push(temp);
    }
    return res;
}


var levelOrder = function(root) {
    const res = [];
    if (!root) return res; //没有根结点，直接返回空数组
    const q = []; //模拟队列
    q.push(root); //根结点入队
    while (q.length !== 0) {
        let len = q.length; //当前队列的长度
        res.push([]); //结果数组尾部插入空数组
        for (let i = 0; i < len; i++) {
            const node = q.shift(); //删除数组第一个元素并返回该值===队首元素
            res[res.length - 1].push(node.val); //结果数组最后一位即空数组内push元素
            if (node.left) q.push(node.left);
            if (node.right) q.push(node.right);
        }
    }
    return res;
}