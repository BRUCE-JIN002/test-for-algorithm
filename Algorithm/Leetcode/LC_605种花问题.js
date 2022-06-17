var canPlaceFlowers = function(flowerbed, n) {
    const len = flowerbed.length;
    if (n === 0) return true;
    //数组长度为 1时特判
    if (len === 1) {
        if (flowerbed[0] === 1) return false;
        return true;
    }
    //特判开头结尾
    if (flowerbed[0] === flowerbed[1] && flowerbed[1] === 0) {
        n--;
        flowerbed[0] = 1;
        if (n === 0) return true;
    }
    if (flowerbed[len - 1] === flowerbed[len - 2] && flowerbed[len - 1] === 0) {
        n--;
        flowerbed[len - 1] = 1;
        if (n === 0) return true;
    }
    //常规判断
    for (let i = 1; i + 1 < len; i++) {
        if (
            flowerbed[i - 1] === flowerbed[i] &&
            flowerbed[i] === flowerbed[i + 1] &&
            flowerbed[i] === 0
        ) {
            flowerbed[i] = 1;
            n--;
            if (n === 0) break;
        }
    }
    return n === 0;
};

console.log(canPlaceFlowers([0, 0], 2));