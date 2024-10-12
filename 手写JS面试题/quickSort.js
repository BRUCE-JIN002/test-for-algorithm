//1. 冒泡排序
const bubbleSort = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
    }
  }
  return arr;
};

// console.log(bubbleSort([1, 3, 2, 14, 5, 0, 8, 6, 90]));

//2. 快速排序
const quickSort = (arr) => {
  if (arr.length < 2) return arr;
  let flag = arr[0];
  let left = [];
  let right = [];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < flag) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return quickSort(left).concat(flag, quickSort(right));
};

// console.log(quickSort([1, 3, 2, 14, 5, 0, 8, 6, 90]));

const helper = (arr, start, end) => {
  //双指针
  let init = start;
  let flag = arr[init];
  start++;
  while (start <= end) {
    while (arr[start] < flag) start++;
    while (arr[end] > flag) end--;
    if (start < end) {
      [arr[start], arr[end]] = [arr[end], arr[start]];
      start++;
      end--;
    }
  }
  [arr[init], arr[start - 1]] = [arr[start - 1], arr[init]];
  return start;
};

const quickSortLocal = (arr, start, end) => {
  if (start < end) {
    let index = helper(arr, start, end);
    quickSortLocal(arr, start, index - 1);
    quickSortLocal(arr, index, end);
  }
  return arr;
};

const arr = [1, 3, 2, 14, 5, 0, 8, 6, 90];
console.log(quickSortLocal(arr, 0, arr.length - 1));
