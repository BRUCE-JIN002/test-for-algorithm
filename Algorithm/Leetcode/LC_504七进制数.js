var convertToBase7 = function(num) {
    let str = "";
    let flag = 0;
    if (num === 0) {
        return "0";
    }
    if (num < 0) {
        num = num * -1;
        flag = 1;
    }
    while (num) {
        str = String(num % 7) + str;
        num = Math.floor(num / 7);
    }
    if (flag) {
        str = "-" + str;
    }
    return str;
};

console.log(convertToBase7(100));