var productExceptSelf = function(nums) {
    let multiSum = 1,
        n = nums.length;
    let res = [];
    let zeroCount = 0,
        indexOfZero;
    for (let i = 0; i < n; i++) {
        if (nums[i] === 0) {
            indexOfZero = i;
            zeroCount++;
            continue;
        }
        if (zeroCount > 1) {
            multiSum = 0;
            break;
        }
        multiSum *= nums[i];
    }

    const resultSum = multiSum;
    //两个零时
    if (zeroCount > 1) {
        res = new Array(n).fill(0);
        return res;
    }

    if (resultSum && zeroCount === 0) {
        //没有零时
        for (let i = 0; i < n; i++) {
            res.push(resultSum / nums[i]);
        }
    } else {
        //一个零时
        res = new Array(n).fill(0);
        res[indexOfZero] = resultSum;
    }

    return res;
};

const arr = [-1, 0, 3, 4];
let res = productExceptSelf(arr);
console.log(res);