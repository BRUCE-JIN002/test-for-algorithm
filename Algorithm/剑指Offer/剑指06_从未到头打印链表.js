var reversePrint = function(head) {
    if (!head) return [];
    let res = [];
    let step = head;
    while (step !== null) {
        res.push(step.val);
        step = step.next;
    }
    return res.reverse();
};

var reversePrint = function(head) {
    let nodes = [];
    while (head !== null) {
        nodes.unshift(head.val);
        head = head.next;
    }
    return nodes;
};