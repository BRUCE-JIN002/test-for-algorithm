var add = function(a, b) {
    while (b !== 0) {
        //当进位为 0时跳出
        let c = (a & b) << 1; // c = 进位
        a ^= b; //a = 非进位和
        b = c; // b = 进位
    }
    return a;
};