var reverseBetween = function (head, left, right) {
  let dummy = {
    next: head
  };
  let temp = dummy;

  for (let i = 0; i < left - 1; i++) {
    temp = temp.next;
  }

  let prev = temp.next;
  let cur = prev.next;

  for (let i = 0; i < right - left; i++) {
    let next = cur.next;
    cur.next = prev;
    prev = cur;
    cur = next;
  }
  temp.next.next = cur;
  temp.next = prev;

  return dummy.next;
};
