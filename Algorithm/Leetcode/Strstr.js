//暴力法
var strStr = function(haystack, needle) {
    const n = haystack.length;
    const m = needle.length;
    for (let i = 0; i + m <= n; i++) {
        let f = true;
        for (let j = 0; j < m; j++) {
            if (haystack[i + j] != needle[j]) {
                f = false;
                break;
            }
        }
        if (f) {
            return i;
        }
    }
    return -1;
};

console.log(strStr("a", "a"));