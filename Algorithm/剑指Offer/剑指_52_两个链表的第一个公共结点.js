//双指针
var getIntersectionNode = function(headA, headB) {
    if (!headA || !headB) return null;
    let a = headA,
        b = headB;
    while (a !== b) {
        a = a === null ? headB : a.next;
        b = b === null ? headA : b.next;
    }
    return a;
};

//方法2：哈希表