var containsDuplicate = function(nums) {
    let newSet = new Set();
    for (let i = 0; i < nums.length; i++) {
        if (!newSet.add(nums[i])) {
            newSet.push(nums[i]);
        } else {
            return false;
        }
    }
    return true;
};


let nums = [1, 2, 3, 4];

console.log(containsDuplicate(nums));