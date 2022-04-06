/**
 * 选择排序
 */

function selectSort(arr) {
    let len = arr.length;
    let minIndex;
    for (let i = 0; i < len - 1; i++) {
        minIndex = i;
        for (let j = i; j < len; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j; //更新 minIndex为最小元素的下标
            }
        }
        //最小下标不是 i时交换
        if (minIndex !== i) {
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
        }
    }
    return arr;
}

console.log(selectSort([3, 6, 2, 4, 1]));