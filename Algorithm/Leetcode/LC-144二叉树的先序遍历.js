var preorderTraversal = function (root) {
  const res = [];
  const stack = [root];
  if (root === null) return res;

  while (stack.length) {
    let cur = stack.pop();
    res.push(cur.val);
    cur.right && stack.push(cur.right);
    cur.left && stack.push(cur.left);
  }
  return res;
};
