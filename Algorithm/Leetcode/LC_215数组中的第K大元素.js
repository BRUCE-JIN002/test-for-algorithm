var findKthLargest = function(nums, k) {
    // let stack = [];
    let len = nums.length;
    nums.sort((a, b) => a - b);
    console.log(nums);
    return nums[len - k];

    // for (let i = len - 1; i > 0; i--) {
    //     //栈空时
    //     if (stack.length === 0) {
    //         stack.push(nums[i]);
    //     }
    //     //栈不空
    //     if (nums[i] < stack[stack.length - 1] && stack.length < k) {
    //         stack.push(nums[i]);
    //     } else {
    //         if (stack.length === k) {
    //             return stack.pop();
    //         }
    //     }
    // }
};

let nums = [3, 2, 3, 1, 2, 4, 5, 5, 6];

let res = findKthLargest(nums, 4);

console.log(res);