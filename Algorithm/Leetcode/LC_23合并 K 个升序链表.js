//暴力解法
var mergeKLists1 = function (lists) {
  const list = [];
  for (let i = 0; i < lists.length; i++) {
    const node = lists[i];
    while (node) {
      list.push(node);
      node = node.next;
    }
  }
  list.sort((a, b) => a.value - b.value);
  let head = (cur = list[0] || null);
  for (let i = 0; i < list.length; i++) {
    cur.next = list[i];
    cur = cur.next;
  }
  return head;
};

//正常解法
const mergeKLists = function (lists) {
  if (lists.length === 0) {
    return null;
  }

  return mergeLists(lists, 0, lists.length - 1);
};

const mergeLists = function (list, start, end) {
  if (start === end) {
    return list[start];
  }
  const mid = start + ((end - start) >> 1);
  const leftList = mergeLists(list, start, mid);
  const rightList = mergeLists(list, mid, end);
  return merge(leftList, rightList);
};

function merge(head1, head2) {
  let head = new ListNode(0);
  let p = head;
  while (head1 && head2) {
    if (head1.val <= head2.val) {
      p.next = head1;
      head1 = head1.next;
    } else {
      p.next = head2;
      head2 = head2.next;
    }
    p = p.next;
  }
  p.next = head1 ? head1 : head2;
  return head;
}
