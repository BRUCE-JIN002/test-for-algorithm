var findShortestSubArray = function(nums) {
    const map = {};
    //数组中的三个元素分别代表这个数出现的次数、
    //这个数在原数组中第一次出现的位置和这个数在原数组中最后一次出现的位置
    for (const [i, num] of nums.entries()) {
        if (num in map) {
            map[num][0]++; //出现的次数加一
            map[num][2] = i; //最后一次出现的位置
        } else {
            map[num] = [1, i, i];
        }
    }

    let maxNum = 0,
        minLen = 0;
    for (const [count, left, right] of Object.values(map)) {
        if (maxNum < count) {
            maxNum = count;
            minLen = right - left + 1;
        } else if (maxNum === count) {
            //度相同
            if (minLen > right - left + 1) {
                minLen = right - left + 1;
            }
        }
    }
    return minLen;
};

let nums = [1, 2, 2, 3, 1, 4, 2];
console.log(findShortestSubArray(nums));