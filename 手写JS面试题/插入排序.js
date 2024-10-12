function insertSort(arr) {
  let len = arr.length;
  for (let i = 1; i < len; i++) {
    let j = i;
    let target = arr[j];
    while (j > 0 && target < arr[j - 1]) {
      arr[j] = arr[j - 1]; //元素后移
      j--;
    }
    arr[j] = target; //插入到最终的位置
  }
  return arr;
}

console.log(insertSort([3, 6, 2, 4, 1]));
