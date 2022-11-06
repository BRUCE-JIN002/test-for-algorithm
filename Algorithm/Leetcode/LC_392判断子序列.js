var isSubsequence = function(s, t) {
    let n = s.length,
        m = t.length;
    let i = 0,
        j = 0;
    while (i < n && j < m) {
        if (s[i] == t[j]) {
            i++;
        }
        j++;
    }
    return i === n; //i移动到了末尾，说明匹配结束完成
};