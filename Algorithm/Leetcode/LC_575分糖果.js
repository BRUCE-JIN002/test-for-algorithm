var distributeCandies = function(candyType) {
    const half = Math.floor(candyType.length / 2);
    const set = new Set(candyType);
    return set.size >= half ? half : set.size;
};

const ans = distributeCandies([6, 6, 6, 6]);
console.log(ans);