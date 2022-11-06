var selfDividingNumbers = function(left, right) {
    let arr = [];
    for (let i = left; i <= right; i++) {
        let copy = i;
        let flag = true;
        while (copy) {
            let temp = copy % 10;
            copy = Math.floor(copy / 10);
            if (i % temp !== 0) {
                flag = false;
                break;
            }
        }
        if (flag) {
            arr.push(i);
        }
    }
    return arr;
};

selfDividingNumbers(47, 85);