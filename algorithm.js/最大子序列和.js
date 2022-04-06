var maxSubArray = function(nums) {
    let pre = 0,
        maxAns = nums[0];
    nums.forEach((x) => {
        pre = Math.max(pre + x, x); //不断更新pre为最大的前序和
        maxAns = Math.max(maxAns, pre);
    });
    return maxAns;
}


//删除指定值的链表节点
var deleteNode = function(head, val) {
    if (!head) return head;
    let dummy = new ListNode(0, head); //虚拟节点，值0,next指针指向head
    let cur = dummy;
    while (cur && cur.next) {
        if (cur.next.val === val) {
            cur.next = cur.next.next;
        }
        cur = cur.next;
    }
    return dummy.next;
}