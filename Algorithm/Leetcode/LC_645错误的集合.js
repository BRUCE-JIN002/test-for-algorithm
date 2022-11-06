var findErrorNums = function(nums) {
    const len = nums.length;
    let hashTable = new Array(len + 1).fill(0);
    let res = [];

    for (let i = 0; i < len; i++) {
        hashTable[nums[i]] += 1;
    }
    console.log(hashTable);
    let first, second;
    for (let i = 0; i <= len; i++) {
        if (first && second) {
            break;
        }
        if (hashTable[i] === 0) {
            second = i;
        }
        if (hashTable[i] === 2) {
            first = i;
        }
    }
    res.push(first, second);
    return res;
};

console.log(findErrorNums([3, 2, 2]));