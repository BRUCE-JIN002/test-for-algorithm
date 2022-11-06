var matrixReshape = function(nums, r, c) {
    const m = nums.length; //行
    const n = nums[0].length; //列
    if (m * n != r * c) {
        return nums;
    }

    const ans = new Array(r).fill(0).map(() => new Array(c).fill(0));
    for (let x = 0; x < m * n; ++x) {
        ans[Math.floor(x / c)][x % c] = nums[Math.floor(x / n)][x % n];
    }
    console.log(nums);
    console.log(ans);
    return ans;
};

let num = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [12, 4, 65],
];

matrixReshape(num, 2, 6);

var matrixReshape2 = function(nums, r, c) {
    const m = nums.length; //行
    const n = nums[0].length; //列
    if (m * n != r * c) {
        return nums;
    }
    const newMat = nums.flat(2);
    let ans = [];
    for (let i = 0; i < r; i++) {
        const temp = [];
        for (let j = 0; j < c; j++) {
            temp.push(newMat.shift());
        }
        ans.push(temp);
    }
    return ans;
};

console.log(matrixReshape2(num, 2, 6));