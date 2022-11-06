var copyRandomList = function(head, cachedNode = new Map()) {
    if (head == null) {
        return null;
    }
    //判断节点是否存在， 不存在的话直接递归创建后继节点和随机节点
    if (!cachedNode.has(head)) {
        cachedNode.set(head, { val: head.val });
        Object.assign(cachedNode.get(head), {
            next: copyRandomList(head.next, cachedNode),
            random: copyRandomList(head.random, cachedNode),
        });
    }
    return cachedNode.get(head);
};