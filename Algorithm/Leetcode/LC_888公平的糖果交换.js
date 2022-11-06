var fairCandySwap = function(aliceSizes, bobSizes) {
    let sumA = 0,
        sumB = 0;
    for (let i = 0; i < aliceSizes.length; i++) {
        sumA += aliceSizes[i];
    }

    for (let i = 0; i < bobSizes.length; i++) {
        sumB += bobSizes[i];
    }
    const delta = Math.floor((sumA - sumB) / 2);
    const rec = new Set(aliceSizes);
    var ans;
    for (const y of bobSizes) {
        const x = y + delta;
        if (rec.has(x)) {
            ans = [x, y];
            break;
        }
    }
    return ans;
};
let = aliceSizes = [1, 1];
let = bobSizes = [2, 2];

fairCandySwap(aliceSizes, bobSizes);