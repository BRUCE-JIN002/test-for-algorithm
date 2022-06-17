var shortestToChar = function(s, c) {
    const n = s.length;
    const target = c.charCodeAt() - "a".charCodeAt();
    let hashMap = new Array(26).fill(0).map(() => new Array());
    let answer = new Array(n).fill(n);
    //初始化哈希表
    for (let i = 0; i < n; i++) {
        const h = s[i].charCodeAt() - "a".charCodeAt();
        hashMap[h].push(i);
    }
    //计算数据
    for (let i = 0; i < n; i++) {
        for (const el of hashMap[target]) {
            answer[i] = Math.min(Math.abs(i - el), answer[i]);
        }
    }
    console.log(answer);
    return answer;
};

shortestToChar("kyrgdnzemteisewarhvmftsknuxsogccckcwmbmxtsbmozlilc", "e");