var countPrimeSetBits = function(left, right) {
    let ans = 0;
    for (let i = left; i <= right; i++) {
        let count = 0; //记录 i中 1的个数
        let n = i;
        while (n) {
            count++;
            n &= n - 1;
        }
        ans += isPrime(count) ? 1 : 0;
    }
    return ans;
};

const isPrime = (n) => {
    if (n < 2) {
        return false;
    }
    for (let i = 2; i * i <= n; i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
};

console.log(countPrimeSetBits(10, 15));

//返回将x转化为2进制后删除字符‘0’，然后计算其长度
const bitCount = (x) => {
    return x.toString(2).split("0").join("").length;
};