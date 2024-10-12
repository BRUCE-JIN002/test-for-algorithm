const arr = [1, 2, 3, 4, 5];

function recursive(arr, i = 0) {
  if (i === arr.length) return 0;
  return arr[i] + recursive(arr, i + 1);
}

console.log(recursive(arr)); // 15
