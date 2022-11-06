var licenseKeyFormatting = function(s, k) {
    let len = s.length;
    let str = "";
    //转化为大写字母，去除 ‘-’号
    for (let i = 0; i < len; i++) {
        //小写字母转换为大写字母
        if (s[i].charCodeAt() >= 97 && s[i].charCodeAt() <= 122) {
            str += s[i].toUpperCase();
        } else if (s[i] === "-") {
            continue;
        } else {
            str += s[i];
        }
    }

    let strlen = str.length;
    let newStr = "";
    if (k > strlen) {
        return str;
    }

    let flag = strlen % k;
    if (flag) {
        for (let i = 0; i < flag; i++) {
            newStr += str[i];
        }
    }

    for (let i = flag, count = 0; i < strlen; i++, count++) {
        if (count % k === 0 && i !== 0) {
            newStr += "-";
        }
        newStr += str[i];
    }

    return newStr;
};

console.log(licenseKeyFormatting("5F3Z-2e-9-w", 100));