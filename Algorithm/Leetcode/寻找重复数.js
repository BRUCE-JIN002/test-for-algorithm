var findDuplicate = function(nums) {
    let arr = nums.slice().sort((a, b) => a - b);
    // console.log(arr);
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] === arr[i + 1]) {
            return arr[i];
        }
    }
};


arr = [3, 1, 3, 4, 2];
console.log(findDuplicate(arr));


var findDuplicate = function(nums) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                return arr[i];
            }
        }
    }
};


//leetcode解法： 快慢指针
var findDuplicate = function(nums) {
    let slow = 0,
        fast = 0;
    do {
        slow = nums[slow];
        fast = nums[nums[fast]];
    } while (slow != fast);
    slow = 0;
    while (slow != fast) {
        slow = nums[slow];
        fast = nums[fast];
    }
    return slow;
};