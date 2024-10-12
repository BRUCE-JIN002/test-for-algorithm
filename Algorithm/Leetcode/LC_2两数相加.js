var addTwoNumbers = function (l1, l2) {
  let carry = 0;
  let flag = (cur = new ListNode(0));
  while (l1 || l2 || carry) {
    let val1 = l1 !== null ? l1.val : 0;
    let val2 = l2 !== null ? l2.val : 0;
    let sum = val1 + val2 + carry;
    carry = sum >= 10 ? 1 : 0;
    cur.next = new ListNode(sum % 10);
    cur = cur.next;
    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;
  }
  return flag.next;
};
