const aray = [1, 2, 3, 4, 5, 7, 9]

function twoSum(nums, target) {
    let map = {}
    for (let i = 0; i < nums.length; i += 1) {
        const rest = target - nums[i];
        if (map[rest] !== undefined) { //map中存在对应的值, 则返回下标，否则加入map
            // 注意这里map里面的是下标比较小的值。
            return [map[rest], i]
        }
        map[nums[i]] = i //加入map
    }
    return [] //不存在则返回空数组
};

console.log(twoSum(aray, 9));