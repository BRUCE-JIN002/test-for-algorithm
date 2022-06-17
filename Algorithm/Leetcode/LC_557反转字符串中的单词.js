var reverseWords = function(s) {
    let arr = s.split(" ");
    let ans = [];
    for (let i = 0; i < arr.length; i++) {
        ans.push(reverse(arr[i]));
    }
    return ans.join(" ");
};

function reverse(s) {
    let str = "";
    let i = s.length - 1;
    while (i >= 0) {
        str += s[i];
        i--;
    }
    return str;
}

let s = "A";
console.log(reverseWords(s));