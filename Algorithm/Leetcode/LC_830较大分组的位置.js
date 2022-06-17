var largeGroupPositions = function(s) {
    const n = s.length;
    const ans = [];
    for (let i = 0; i < n; i++) {
        let j = i + 1;
        while (j < n && s[i] === s[j]) {
            j++;
        }
        if (j - i >= 3) {
            ans.push([i, j - 1]);
            i = j - 1;
        }
    }
    return ans;
};
let ans = largeGroupPositions("abcdddeeeeaabbbcd");
console.log(ans);