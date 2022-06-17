var wordPattern = function(pattern, s) {
    let res = s.split(" "); //母串转化为数组
    let p2s = {};
    let s2p = {};
    let len = res.length; //母串的长度
    if (len !== pattern.length) {
        return false;
    }
    //长度相等
    for (let i = 0; i < len; i++) {
        const x = res[i],
            y = pattern[i];
        if ((s2p[x] && s2p[x] !== y) || (p2s[y] && p2s[y] !== x)) {
            return false;
        }
        s2p[x] = y;
        p2s[y] = x;
    }
    return true;
};

console.log(wordPattern("aaaa", "dog cat cat dog"));