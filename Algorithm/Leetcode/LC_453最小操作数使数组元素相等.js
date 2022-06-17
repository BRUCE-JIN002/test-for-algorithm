var minMoves = function(nums) {
    const min = Math.min(...nums);
    let count = 0;
    for (const num of nums) {
        count += num - min;
    }
    return count;
};

let num = [1, 2, 3];

console.log(minMoves(num));