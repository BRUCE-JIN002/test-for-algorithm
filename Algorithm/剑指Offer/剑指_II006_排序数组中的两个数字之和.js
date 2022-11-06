var twoSum = function(numbers, target) {
    let map = {};
    for (let i = 0; i < numbers.length; i++) {
        const rest = target - numbers[i];
        if (map[rest] !== undefined) {
            return [map[rest], i];
        } else {
            map[numbers[i]] = i;
        }
    }
    return [];
};

let numbers = [2, 3, 4];
console.log(twoSum(numbers, 6));