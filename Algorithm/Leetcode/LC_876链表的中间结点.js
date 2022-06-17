var middleNode = function(head) {
    slow = fast = head;
    while (fast.next != null && fast != null) {
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
};