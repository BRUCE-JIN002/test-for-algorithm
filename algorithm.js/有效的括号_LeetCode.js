var isValid = function(s) {
    const n = s.length; //字符串个数非偶数时返回false
    if (n % 2 === 1) {
        return false;
    }
    const pairs = new Map([
        [')', '('],
        [']', '['],
        ['}', '{']
    ]);
    const stk = [];
    for (let ch of s) {
        if (pairs.has(ch)) { //存在对应的匹配项
            //栈空或与栈顶元素不匹配
            if (!stk.length || stk[stk.length - 1] !== pairs.get(ch)) {
                return false;
            }
            stk.pop();
        } else {
            stk.push(ch);
        }
    };
    return !stk.length;
};