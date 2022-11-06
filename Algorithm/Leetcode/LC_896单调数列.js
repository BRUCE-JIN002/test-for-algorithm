var isMonotonic = function(nums) {
    let increase = true,
        decrease = true;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > nums[i + 1]) {
            increase = false;
        }
        if (nums[i] < nums[i + 1]) {
            decrease = false;
        }
    }
    return increase || decrease;
};

let num = [1, 2, 3, 4];
console.log(isMonotonic(num));