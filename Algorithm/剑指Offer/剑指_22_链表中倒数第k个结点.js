var getKthFromEnd = function(head, k) {
    let fast = head;
    let slow = head;
    for (let i = 0; i < k; i++) {
        fast = fast.next;
    }
    while (fast !== null) {
        fast = fast.next;
        slow = slow.next;
    }
    return slow;
};