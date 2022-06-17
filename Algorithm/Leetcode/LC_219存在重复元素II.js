var containsNearbyDuplicate = function(nums, k) {
    let map = new Map();
    for (let i = 0; i < nums.length; i++) {
        let temp;
        if (map.has(nums[i])) {
            temp = map.get(nums[i]);
            map.set(nums[i], i);
        } else {
            map.set(nums[i], i);
        }
        if (Math.abs(temp - i) <= k) {
            return true;
        }
    }
    return false;
};

let arr = [1, 0, 1, 1];

const res = containsNearbyDuplicate(arr, 1);
console.log(res);