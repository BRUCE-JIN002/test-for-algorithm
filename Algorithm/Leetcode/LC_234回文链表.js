/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  let fast = (slow = head);
  let pre = null;
  while (fast && fast.next) {
    fast = fast.next.next;

    let next = slow.next;
    slow.next = pre;
    pre = slow;
    slow = next;
  }
  if (fast) {
    //奇数个节点,跳过中间点
    slow = slow.next;
  }
  while (pre && slow) {
    if (pre.val !== slow.val) {
      return false;
    }
    pre = pre.next;
    slow = slow.next;
  }
  return true;
};
