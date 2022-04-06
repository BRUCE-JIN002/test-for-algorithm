/**
 * filter 为数组中的每个元素调用一次 callback 函数，
 * 并利用所有使得 callback 返回 true 或等价于 true 的值的元素创建一个新数组。
 * callback 只会在已经赋值的索引上被调用，对于那些已经被删除或者从未被赋值的索引不会被调用。
 * 那些没有通过 callback 测试的元素会被跳过，不会被包含在新数组中。
 *
 * callback 被调用时传入三个参数：
 * 1.元素的值 element:数组中当前正在处理的元素
 * 2.元素的索引 index(可选): 正在处理的元素在数组中的索引。
 * 3. 被遍历的数组本身 array: 调用了 filter 的数组本身。
 */

function quickSort(arr) {
    let len = arr.length;
    if (len < 2) {
        return arr;
    }

    const cur = arr[len - 1];
    //v, i分别代表当前处理的元素和其下标
    const left = arr.filter((v, i) => v < cur && i !== len - 1);
    const right = arr.filter((v) => v > cur);
    return [...quickSort(left), cur, ...quickSort(right)];
}

console.log(quickSort([3, 6, 2, 4, 1]));