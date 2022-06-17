var reverseWords = function(s) {
    let arr = s.split(" ");
    let res = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== "") {
            res.push(arr[i]);
        }
    }
    return res.reverse().join(" ");
};

console.log(reverseWords("a good    example."));

//官方解法：
var reverseWords = function(s) {
    return s.trim().split(/\s+/).reverse().join(" ");
};