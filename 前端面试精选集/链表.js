function ListNode(val) {
    this.val = val;
    this.next = null;
}

const head = new ListNode(0);
temp = head;
for (let i = 1; i < 10; i++) {
    let t = new ListNode(i);
    temp.next = t;
    temp = temp.next;
}

let tempNode = head;

while (tempNode) {
    console.log(tempNode.val);
    tempNode = tempNode.next;
}