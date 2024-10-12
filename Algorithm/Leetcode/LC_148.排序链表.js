/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function (head) {
  if (!head) {
    return null;
  }
  let arr = [];
  while (head) {
    arr.push(new ListNode(head.val));
    head = head.next;
  }

  arr.sort((a, b) => a.val - b.val);

  for (let i = 0; i < arr.length - 1; i++) {
    arr[i].next = arr[i + 1];
  }
  return arr[0];
};
