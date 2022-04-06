function binarySearch(arr, target) {
    let l = 0,
        r = arr.length - 1;
    while (l <= r) {
        let mid = Math.floor((l + r) / 2);

        if (arr[mid] === target) {
            return mid;
        }

        if (arr[mid] > target) {
            r = mid - 1;
        } else {
            l = mid + 1;
        }
    }
    return -1;
}

let arr = [1, 2, 3, 6, 4, 9, 20, 27];
var sortedArr = arr.sort((a, b) => a - b);
console.log(sortedArr);
console.log(binarySearch(sortedArr, 1));
console.log(binarySearch(sortedArr, 9));
console.log(binarySearch(sortedArr, 27));