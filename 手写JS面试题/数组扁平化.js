function flatter(arr) {
  if (!arr.length) return;
  arr.reduce(
    (pre, cur) =>
      Array.isArray(cur) ? [...pre, ...flatter(cur)] : [...pre, cur],
    []
  );
  return [...new Set(arr)];
}
const arr = [1, 2, [1, [2, 3, [4, 5, [6]]]]];
console.log(flatter(arr));

//迭代实现
//some() 方法测试数组中是不是至少有1个元素通过了被提供的函数测试。
//它返回的是一个Boolean类型的值。
//测试函数：(item) => Array.isArray(item);

function flatter1(arr) {
  if (!arr.length) return;
  while (arr.some((item) => Array.isArray(item))) {
    arr = [].concat(...arr);
  }
  return arr;
}
console.log(flatter1([1, 2, [1, [2, 3, [4, 5, [6]]]]]));

//递归实现
function flatter2(arr) {
  if (!arr) return;
  let res = [];
  const dfs = (arr) => {
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        dfs(arr[i]);
      } else {
        res.push(arr[i]);
      }
    }
  };
  dfs(arr);
  return [...new Set(res)].sort((a, b) => a - b);
}

console.log(flatter2([7, 3, 1, 2, [1, [2, 3, [4, 5, [6]]]]]));
