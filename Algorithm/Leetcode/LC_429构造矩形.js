//解法 1:
var constructRectangle1 = function(area) {
    if (isPrime(area)) {
        return [area, 1];
    }
    const sqrtNum = Math.floor(Math.sqrt(area));

    if (Math.pow(sqrtNum, 2) === area) {
        return [sqrtNum, sqrtNum];
    } else {
        let i = sqrtNum;
        let j = i + 1;

        while (i > 0 && j < area && i * j !== area) {
            if (i * j > area) {
                i--;
            } else if (i * j < area) {
                j++;
            }
        }
        return [j, i];
    }
};

const isPrime = (n) => {
    if (n <= 1) {
        return false;
    }
    for (let i = 2; i * i <= n; i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
};

//解法 2：
var constructRectangle = function(area) {
    let m = Math.floor(Math.sqrt(area));
    while (area % m !== 0) {
        --m;
    }
    return [area / m, m];
};