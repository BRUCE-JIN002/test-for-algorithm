var findTheDifference = function(s, t) {
    let sum = 0;
    for (let i = 0; i < t.length; i += 1) {
        sum += t[i].charCodeAt();
    }
    for (let i = 0; i < s.length; i += 1) {
        sum -= s[i].charCodeAt();
    }
    return String.fromCharCode(sum);
};

let s = "abcde";
let t = "abcedf";
findTheDifference(s, t);
console.log(findTheDifference(s, t));