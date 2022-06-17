var numJewelsInStones = function(jewels, stones) {
    let set = new Set(jewels);
    let ans = 0;
    for (let i = 0; i < stones.length; i++) {
        if (set.has(stones[i])) {
            ans += 1;
        }
    }
    return ans;
};

console.log(numJewelsInStones("z", "aAAZZZZZ"));